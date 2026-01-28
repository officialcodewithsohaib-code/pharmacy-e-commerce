'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
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
    }

    return (
      <motion.div
        ref={ref}
        style={baseStyles}
        className={cn(className)}
        animate={
          animation === 'pulse'
            ? {
                opacity: [0.5, 1, 0.5],
              }
            : {
                backgroundPosition: ['200% 0', '-200% 0'],
                backgroundImage:
                  'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                backgroundSize: '200% 100%',
              }
        }
        transition={
          animation === 'pulse'
            ? {
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            : {
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }
        }
        {...props}
      />
    )
  }
)

Skeleton.displayName = 'Skeleton'

export { Skeleton }
