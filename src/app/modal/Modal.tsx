"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const SCROLLABLE_OVERFLOW = new Set(["auto", "scroll", "overlay"]);

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  hideCloseButton?: boolean;
  disableBackdropClick?: boolean;
  locale?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  locale,
  className = "",
  overlayClassName = "",
  hideCloseButton = false,
  disableBackdropClick = false,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const touchStartYRef = useRef(0);
  // const scrollPositionRef = useRef({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  // const previousActiveElementRef = useRef<HTMLElement | null>(null);

  // 클라이언트에서만 마운트되도록 제어 (Hydration 에러 방지)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 포커스 가능한 요소들을 찾는 함수
  const getFocusableElements = (): HTMLElement[] => {
    if (!modalRef.current) return [];

    const focusableSelectors = [
      "a[href]",
      "button:not([disabled])",
      "textarea:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
    ];

    const elements = modalRef.current.querySelectorAll<HTMLElement>(
      focusableSelectors.join(", "),
    );

    return Array.from(elements).filter((element) => {
      return element.offsetParent !== null; // visible elements only
    });
  };

  // 키보드 트랩 - 모달 내부에서만 포커스 이동
  useEffect(() => {
    if (!modalContentRef.current || !isOpen || !isMounted) return;

    // 모달이 열릴 때 현재 포커스된 요소 저장
    // previousActiveElementRef.current = document.activeElement as HTMLElement;

    // 첫 번째 포커스 가능한 요소에 포커스
    setTimeout(() => {
      modalContentRef.current?.focus();
    }, 100);

    const handleKeyDown = (e: KeyboardEvent) => {
      // ESC 키로 닫기
      if (e.key === "Escape") {
        onClose();
        return;
      }

      // Tab 키가 아니면 무시
      if (e.key !== "Tab") return;

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement as HTMLElement;

      // Shift + Tab: 첫 번째 요소에서 마지막으로 이동
      if (e.shiftKey) {
        if (activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      }
      // Tab: 마지막 요소에서 첫 번째로 이동
      else {
        if (activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // 클린업: 모달이 닫힐 때 이전 포커스 복원
    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      // 이전에 포커스되어 있던 요소로 복원
      // if (previousActiveElementRef.current) {
      //   previousActiveElementRef.current.focus();
      // }
    };
  }, [modalContentRef, isOpen, isMounted, onClose]);

  const getScrollableElement = (
    target: EventTarget | null,
  ): HTMLElement | null => {
    const modalContent = modalContentRef.current;

    if (
      typeof window === "undefined" ||
      !modalContent ||
      !(target instanceof HTMLElement)
    ) {
      return null;
    }

    let current: HTMLElement | null = target;

    while (current && modalContent.contains(current)) {
      const overflowY = window.getComputedStyle(current).overflowY;
      const isScrollable =
        SCROLLABLE_OVERFLOW.has(overflowY) &&
        current.scrollHeight > current.clientHeight;

      if (isScrollable) {
        return current;
      }

      if (current === modalContent) {
        break;
      }

      current = current.parentElement;
    }

    return null;
  };

  // useEffect(() => {
  //   const handleEsc = (e: KeyboardEvent) => {
  //     if (e.key === 'Escape') {
  //       onClose();
  //     }
  //   };
  //
  //   // 배경 wheel 이벤트 완전 차단
  //   const preventWheel = (e: WheelEvent) => {
  //     if (getScrollableElement(e.target)) {
  //       return;
  //     }
  //
  //     // 그 외 모든 경우 완전 차단
  //     e.preventDefault();
  //     e.stopPropagation();
  //     e.stopImmediatePropagation();
  //   };
  //
  //
  // }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (!disableBackdropClick && e.target === modalRef.current) {
      onClose();
    }
  };

  // 배경 터치 스크롤 막기 (모달 내부 스크롤은 허용)
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      touchStartYRef.current = e.touches[0].clientY;
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 0) return;

    const currentY = e.touches[0].clientY;
    const deltaY = touchStartYRef.current - currentY;
    touchStartYRef.current = currentY;

    const scrollableElement = getScrollableElement(e.target);

    if (scrollableElement) {
      const canScrollUp = scrollableElement.scrollTop > 0;
      const canScrollDown =
        scrollableElement.scrollTop + scrollableElement.clientHeight <
        scrollableElement.scrollHeight;
      const isScrollingDown = deltaY > 0;

      if (
        (isScrollingDown && !canScrollDown) ||
        (!isScrollingDown && !canScrollUp)
      ) {
        e.preventDefault();
      }

      e.stopPropagation();
      return;
    }

    e.preventDefault();
    e.stopPropagation();
  };

  const handleTouchEnd = () => {
    touchStartYRef.current = 0;
  };

  // overlay에서 wheel 이벤트 전파 차단 (preventDefault는 document 리스너에서 처리)
  const handleWheel = (e: React.WheelEvent) => {
    // React 합성 이벤트는 passive이므로 stopPropagation만 수행
    e.stopPropagation();
  };

  // SSR 시 렌더링하지 않음 (Hydration 에러 방지)
  if (!isMounted || !isOpen) return null;

  // document.body가 없으면 렌더링하지 않음 (SSR 환경)
  if (typeof window === "undefined" || !document.body) return null;

  return createPortal(
    <div
      ref={modalRef}
      className={`fixed inset-0 z-[9999] flex items-center justify-center ${overlayClassName}`}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        touchAction: "none",
        pointerEvents: "auto",
      }}
      onClick={handleOverlayClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onWheel={handleWheel}
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalContentRef}
        className={`relative max-w-[calc(100vw_-_32px)] rounded-lg bg-white px-5 py-13 shadow-xl sm:rounded-[40px] sm:p-25 sm:pb-20 ${className}`}
        style={{ pointerEvents: "auto" }}
        role="document"
        tabIndex={-1}
      >
        {/* 닫기 버튼 */}
        {!hideCloseButton && (
          <button
            onClick={onClose}
            className="focus-ring-base absolute top-2 right-2 z-20 cursor-pointer sm:top-18 sm:right-15"
            aria-label={
              (locale && (locale === "ko" ? "닫기" : "close")) || "닫기(Close)"
            }
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 sm:h-6 sm:w-6"
            >
              <path
                d="M18 6L6 18M18 18L6 6"
                stroke="#22171C"
                strokeWidth={1.5}
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}

        {/* 컨텐츠 영역 */}
        {children}
      </div>
    </div>,
    document.body,
  );
}
