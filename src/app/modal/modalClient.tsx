"use client";

import { useEffect, useState, useRef } from "react";
import Modal from "./Modal";

export default function DigitalNoticeList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const focusBtnRef = useRef<string | null>(null);
  const list = {
    button: ["test", "test", "test", "test", "test", "test", "test", "test"],
  };
  useEffect(() => {
    if (!isModalOpen && focusBtnRef.current) {
      //   const btn = document.getElementById(
      //     focusBtnRef.current!,
      //   ) as HTMLButtonElement | null;
      //   btn?.focus();
      const timer = setTimeout(() => {
        const btn = document.getElementById(
          focusBtnRef.current!,
        ) as HTMLButtonElement | null;
        btn?.focus();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  const handleFocusModalBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    focusBtnRef.current = event.currentTarget.id;
  };

  return (
    <div>
      <ul>
        {list.button.map((item, index) => (
          <li key={`mobileModal${index}`}>
            <button
              id={`mobileModal${index}`}
              onClick={(e) => {
                handleFocusModalBtn(e);
                setIsModalOpen(true);
              }}
              className="btn-inquiry h-[48px] !px-6 sm:-my-2 sm:h-[50px] sm:!px-5"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      {/* 이미지 미리보기 모달 */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        className="flex h-[calc(100dvh_-_100px)] w-[1342px] max-w-[90vw] flex-col"
      >
        <h2 className="mb-4 pr-10 text-2xl font-extrabold sm:mb-8 sm:text-[40px]">
          dddd
          <span className="text-bright-magenta ml-1 align-[-0.4em] text-[9px] sm:ml-2 sm:text-xs">
            ●
          </span>
        </h2>
        <div className="h-[100vh] overflow-y-auto"></div>
        <div className="mt-10 flex justify-center sm:mt-15">
          <button
            onClick={() => {
              setIsModalOpen(false);
            }}
            className="bg-uplus-black w-[140px] cursor-pointer rounded-lg px-5 py-3 text-center text-base leading-[1.4] font-bold text-white sm:h-[74px] sm:w-[240px] sm:px-10 sm:py-5 sm:text-[24px]"
          >
            확인
          </button>
        </div>
      </Modal>
    </div>
  );
}
