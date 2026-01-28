'use client'

import * as React from 'react'
import { cn } from '@/lib/utils/cn'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
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
      style,
      ...props
    },
    ref
  ) => {
    const baseStyles: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'var(--font-weight-medium)' as any,
      borderRadius: 'var(--radius-full)',
      whiteSpace: 'nowrap',
      transition: 'var(--transition-fast)' as any,
      gap: dot ? 'var(--space-xs)' : '0',
      animation: 'fadeIn 0.2s ease-in-out',
    }

    const variantStyles: Record<string, React.CSSProperties> = {
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

    const sizeStyles: Record<string, React.CSSProperties> = {
      sm: {
        fontSize: 'var(--font-size-xs)' as any,
        padding: 'var(--space-xs) var(--space-sm)',
      },
      md: {
        fontSize: 'var(--font-size-sm)' as any,
        padding: 'calc(var(--space-xs) + 1px) var(--space-md)',
      },
      lg: {
        fontSize: 'var(--font-size-base)' as any,
        padding: 'var(--space-sm) var(--space-lg)',
      },
    }

    const combinedStyles: React.CSSProperties = {
      ...baseStyles,
      ...variantStyles[variant],
      ...sizeStyles[size],
      ...style,
    }

    const dotColor: Record<string, string> = {
      default: 'var(--badge-text)',
      success: 'var(--status-success)',
      error: 'var(--status-error)',
      warning: 'var(--status-warning)',
      info: 'var(--status-info)',
      outline: 'var(--text-primary)',
    }

    const dotSize = size === 'sm' ? '6px' : size === 'lg' ? '10px' : '8px'

    return (
      <span
        ref={ref}
        style={combinedStyles}
        className={cn(className)}
        {...props}
      >
        {dot && (
          <span
            style={{
              width: dotSize,
              height: dotSize,
              borderRadius: '50%',
              backgroundColor: dotColor[variant],
            }}
          />
        )}
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export { Badge }
