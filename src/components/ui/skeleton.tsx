'use client'

import * as React from 'react'
import { cn } from '@/lib/utils/cn'

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular'
  width?: string | number
  height?: string | number
  animation?: 'pulse' | 'wave'
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      className,
      variant = 'rectangular',
      width,
      height,
      animation = 'pulse',
      style,
      ...props
    },
    ref
  ) => {
    const baseStyles: React.CSSProperties = {
      backgroundColor: 'var(--skeleton)',
      width: width || '100%',
      height: height || (variant === 'text' ? '1em' : '100px'),
      borderRadius:
        variant === 'circular'
          ? '50%'
          : variant === 'text'
          ? 'var(--radius-sm)'
          : 'var(--radius-md)',
      display: 'inline-block',
      animation: animation === 'pulse' ? 'skeletonPulse 1.5s ease-in-out infinite' : 'skeletonWave 1.5s linear infinite',
      backgroundSize: animation === 'wave' ? '200% 100%' : 'auto',
      backgroundImage: animation === 'wave' 
        ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
        : 'none',
      ...style,
    }

    return (
      <div
        ref={ref}
        style={baseStyles}
        className={cn(className)}
        {...props}
      />
    )
  }
)

Skeleton.displayName = 'Skeleton'

export { Skeleton }
