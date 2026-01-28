'use client'

import * as React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

export interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'elevated' | 'outline'
  hoverable?: boolean
  clickable?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = 'default',
      hoverable = false,
      clickable = false,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = {
      backgroundColor: 'var(--surface)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-lg)',
      transition: 'var(--transition-base)',
    }

    const variantStyles = {
      default: {
        border: '1px solid var(--border-default)',
        boxShadow: 'var(--shadow-card)',
      },
      elevated: {
        border: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-lg)',
      },
      outline: {
        border: '2px solid var(--border-default)',
        boxShadow: 'none',
      },
    }

    const combinedStyles = {
      ...baseStyles,
      ...variantStyles[variant],
      ...style,
      cursor: clickable ? 'pointer' : 'default',
    }

    return (
      <motion.div
        ref={ref}
        style={combinedStyles}
        className={cn(className)}
        whileHover={
          hoverable || clickable
            ? {
                y: -4,
                boxShadow: 'var(--shadow-card-hover)',
              }
            : {}
        }
        whileTap={clickable ? { scale: 0.98 } : {}}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, style, ...props }, ref) => (
  <div
    ref={ref}
    style={{
      marginBottom: 'var(--space-md)',
      ...style,
    }}
    className={cn(className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, style, ...props }, ref) => (
  <h3
    ref={ref}
    style={{
      color: 'var(--text-primary)',
      fontSize: 'var(--font-size-xl)',
      fontWeight: 'var(--font-weight-semibold)',
      lineHeight: 'var(--line-height-tight)',
      marginBottom: 'var(--space-xs)',
      ...style,
    }}
    className={cn(className)}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, style, ...props }, ref) => (
  <p
    ref={ref}
    style={{
      color: 'var(--text-secondary)',
      fontSize: 'var(--font-size-sm)',
      lineHeight: 'var(--line-height-relaxed)',
      ...style,
    }}
    className={cn(className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props} />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, style, ...props }, ref) => (
  <div
    ref={ref}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-md)',
      marginTop: 'var(--space-lg)',
      paddingTop: 'var(--space-md)',
      borderTop: '1px solid var(--border-light)',
      ...style,
    }}
    className={cn(className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
