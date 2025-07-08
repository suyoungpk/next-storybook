
import React from 'react';
import './figma-button.css';

export type FigmaButtonType = 'primary' | 'secondary' | 'outline' | 'text';
export type FigmaButtonSize = 'small' | 'medium' | 'large';
export type FigmaButtonContent = 'text' | 'icon' | 'text_icon';

export interface ButtonProps {
  /** Button type (visual style) */
  type?: FigmaButtonType;
  /** Button size */
  size?: FigmaButtonSize;
  /** Button content type */
  contentType?: FigmaButtonContent;
  /** Button label */
  label?: string;
  /** Icon component or SVG (optional) */
  icon?: React.ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** Optional click handler */
  onClick?: () => void;
  /** Optional extra className */
  className?: string;
}

/** Figma-based Button supporting all states, types, and content variations */
export const Button = ({
  type = 'primary',
  size = 'medium',
  contentType = 'text',
  label = '',
  icon,
  disabled = false,
  onClick,
  className = '',
  ...props
}: ButtonProps) => {
  const base = 'figma-btn';
  const typeClass = `figma-btn--${type}`;
  const sizeClass = `figma-btn--${size}`;
  const classes = [base, typeClass, sizeClass, className].join(' ');

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      {...props}
    >
      {contentType === 'icon' && icon}
      {contentType === 'text' && label}
      {contentType === 'text_icon' && (
        <>
          {icon && <span className="figma-btn__icon">{icon}</span>}
          <span>{label}</span>
        </>
      )}
    </button>
  );
};
