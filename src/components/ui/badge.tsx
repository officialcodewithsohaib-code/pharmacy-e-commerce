'use client'

import * as React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

export interface BadgeProps extends Omit<HTMLMotionProps<'span'>, 'style'> {
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  dot?: boolean
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      dot = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'var(--font-weight-medium)',
      borderRadius: 'var(--radius-full)',
      whiteSpace: 'nowrap' as const,
      transition: 'var(--transition-fast)',
      gap: dot ? 'var(--space-xs)' : '0',
    }

    const variantStyles = {
      default: {
        backgroundColor: 'var(--badge-bg)',
        color: 'var(--badge-text)',
      },
      success: {
        backgroundColor: 'var(--status-success-bg)',
        color: 'var(--status-success)',
      },
      error: {
        backgroundColor: 'var(--status-error-bg)',
        color: 'var(--status-error)',
      },
      warning: {
        backgroundColor: 'var(--status-warning-bg)',
        color: 'var(--status-warning)',
      },
      info: {
        backgroundColor: 'var(--status-info-bg)',
        color: 'var(--status-info)',
      },
      outline: {
        backgroundColor: 'transparent',
        color: 'var(--text-primary)',
        border: '1px solid var(--border-default)',
      },
    }

    const sizeStyles = {
      sm: {
        fontSize: 'var(--font-size-xs)',
        padding: 'var(--space-xs) var(--space-sm)',
      },
      md: {
        fontSize: 'var(--font-size-sm)',
        padding: 'calc(var(--space-xs) + 1px) var(--space-md)',
      },
      lg: {
        fontSize: 'var(--font-size-base)',
        padding: 'var(--space-sm) var(--space-lg)',
      },
    }

    const combinedStyles = {
      ...baseStyles,
      ...variantStyles[variant],
      ...sizeStyles[size],
    }

    const dotColor = {
      default: 'var(--badge-text)',
      success: 'var(--status-success)',
      error: 'var(--status-error)',
      warning: 'var(--status-warning)',
      info: 'var(--status-info)',
      outline: 'var(--text-primary)',
    }

    return (
      <motion.span
        ref={ref}
        style={combinedStyles}
        className={cn(className)}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {dot && (
          <span
            style={{
              width: size === 'sm' ? '6px' : size === 'lg' ? '10px' : '8px',
              height: size === 'sm' ? '6px' : size === 'lg' ? '10px' : '8px',
              borderRadius: '50%',
              backgroundColor: dotColor[variant],
            }}
          />
        )}
        {children}
      </motion.span>
    )
  }
)

Badge.displayName = 'Badge'

export { Badge }
