'use client'

import * as React from 'react'
import { cn } from '@/lib/utils/cn'
import { Loader2 } from 'lucide-react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  loadingText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      loadingText,
      leftIcon,
      rightIcon,
      children,
      disabled,
      style,
      onMouseEnter,
      onMouseLeave,
      onClick,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = React.useState(false)
    const [isPressed, setIsPressed] = React.useState(false)

    const baseStyles: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'var(--font-weight-medium)' as any,
      borderRadius: 'var(--radius-md)',
      transition: 'all 0.15s ease-in-out',
      cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
      border: '1px solid transparent',
      whiteSpace: 'nowrap',
      gap: 'var(--space-sm)',
      transform: isPressed ? 'scale(0.98)' : isHovered ? 'scale(1.02)' : 'scale(1)',
      boxShadow: isHovered && !disabled && !isLoading ? 'var(--shadow-md)' : 'none',
    }

    const variantStyles: Record<string, React.CSSProperties> = {
      primary: {
        backgroundColor: 'var(--primary-600)',
        color: 'var(--text-inverse)',
        borderColor: 'var(--primary-600)',
      },
      secondary: {
        backgroundColor: 'var(--secondary-600)',
        color: 'var(--text-inverse)',
        borderColor: 'var(--secondary-600)',
      },
      outline: {
        backgroundColor: 'transparent',
        color: 'var(--primary-600)',
        borderColor: 'var(--border-default)',
      },
      ghost: {
        backgroundColor: 'transparent',
        color: 'var(--text-secondary)',
        borderColor: 'transparent',
      },
      danger: {
        backgroundColor: 'var(--status-error)',
        color: 'var(--text-inverse)',
        borderColor: 'var(--status-error)',
      },
    }

    const sizeStyles: Record<string, React.CSSProperties> = {
      sm: {
        padding: 'var(--space-xs) var(--space-md)',
        fontSize: 'var(--font-size-sm)' as any,
      },
      md: {
        padding: 'var(--space-sm) var(--space-lg)',
        fontSize: 'var(--font-size-base)' as any,
      },
      lg: {
        padding: 'var(--space-md) var(--space-xl)',
        fontSize: 'var(--font-size-lg)' as any,
      },
    }

    const disabledStyles: React.CSSProperties = {
      opacity: disabled || isLoading ? 0.5 : 1,
    }

    const combinedStyles: React.CSSProperties = {
      ...baseStyles,
      ...variantStyles[variant],
      ...sizeStyles[size],
      ...disabledStyles,
      ...style,
    }

    const iconSize = size === 'sm' ? 14 : size === 'lg' ? 20 : 16

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled && !isLoading) {
        setIsHovered(true)
        onMouseEnter?.(e)
      }
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled && !isLoading) {
        setIsHovered(false)
        setIsPressed(false)
        onMouseLeave?.(e)
      }
    }

    const handleMouseDown = () => {
      if (!disabled && !isLoading) {
        setIsPressed(true)
      }
    }

    const handleMouseUp = () => {
      if (!disabled && !isLoading) {
        setIsPressed(false)
      }
    }

    return (
      <button
        ref={ref}
        style={combinedStyles}
        className={cn(className)}
        disabled={disabled || isLoading}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onClick={onClick}
        {...props}
      >
        {isLoading && <Loader2 className="animate-spin" size={iconSize} />}
        {!isLoading && leftIcon}
        {isLoading ? loadingText || children : children}
        {!isLoading && rightIcon}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
