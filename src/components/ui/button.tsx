'use client'

import * as React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils/cn'
import { Loader2 } from 'lucide-react'

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'style'> {
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
      ...props
    },
    ref
  ) => {
    const baseStyles = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'var(--font-weight-medium)',
      borderRadius: 'var(--radius-md)',
      transition: 'var(--transition-fast)',
      cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
      border: '1px solid transparent',
      whiteSpace: 'nowrap' as const,
      gap: 'var(--space-sm)',
    }

    const variantStyles = {
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

    const sizeStyles = {
      sm: {
        padding: 'var(--space-xs) var(--space-md)',
        fontSize: 'var(--font-size-sm)',
      },
      md: {
        padding: 'var(--space-sm) var(--space-lg)',
        fontSize: 'var(--font-size-base)',
      },
      lg: {
        padding: 'var(--space-md) var(--space-xl)',
        fontSize: 'var(--font-size-lg)',
      },
    }

    const disabledStyles = {
      opacity: disabled || isLoading ? 0.5 : 1,
    }

    const combinedStyles = {
      ...baseStyles,
      ...variantStyles[variant],
      ...sizeStyles[size],
      ...disabledStyles,
    }

    return (
      <motion.button
        ref={ref}
        style={combinedStyles}
        className={cn(className)}
        disabled={disabled || isLoading}
        whileHover={
          !disabled && !isLoading
            ? { scale: 1.02, boxShadow: 'var(--shadow-md)' }
            : {}
        }
        whileTap={!disabled && !isLoading ? { scale: 0.98 } : {}}
        transition={{ duration: 0.15 }}
        {...props}
      >
        {isLoading && <Loader2 className="animate-spin" size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />}
        {!isLoading && leftIcon}
        {isLoading ? loadingText || children : children}
        {!isLoading && rightIcon}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
