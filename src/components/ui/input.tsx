'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils/cn'
import { Eye, EyeOff } from 'lucide-react'

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  error?: string
  helperText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  isLoading?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      disabled,
      isLoading,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [showPassword, setShowPassword] = React.useState(false)

    const isPasswordType = type === 'password'
    const inputType = isPasswordType && showPassword ? 'text' : type

    const inputStyles = {
      width: '100%',
      backgroundColor: 'var(--surface)',
      border: `1px solid ${error ? 'var(--status-error)' : isFocused ? 'var(--border-focus)' : 'var(--border-default)'}`,
      color: 'var(--text-primary)',
      padding: leftIcon ? 'var(--space-sm) var(--space-md) var(--space-sm) var(--space-3xl)' : 'var(--space-sm) var(--space-md)',
      paddingRight: (rightIcon || isPasswordType) ? 'var(--space-3xl)' : 'var(--space-md)',
      borderRadius: 'var(--radius-md)',
      fontSize: 'var(--font-size-base)',
      transition: 'var(--transition-fast)',
      outline: 'none',
    }

    return (
      <div style={{ width: '100%' }}>
        {label && (
          <label
            style={{
              display: 'block',
              color: 'var(--text-secondary)',
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: 'var(--space-xs)',
            }}
          >
            {label}
          </label>
        )}
        
        <div style={{ position: 'relative', width: '100%' }}>
          {leftIcon && (
            <div
              style={{
                position: 'absolute',
                left: 'var(--space-md)',
                top: '50%',
                transform: 'translateY(-50%)',
                color: isFocused ? 'var(--primary-600)' : 'var(--text-tertiary)',
                display: 'flex',
                alignItems: 'center',
                transition: 'var(--transition-fast)',
              }}
            >
              {leftIcon}
            </div>
          )}

          <motion.input
            ref={ref}
            type={inputType}
            style={inputStyles}
            className={cn(className)}
            disabled={disabled || isLoading}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            animate={{
              boxShadow: isFocused ? '0 0 0 3px rgba(37, 99, 235, 0.1)' : 'none',
            }}
            transition={{ duration: 0.2 }}
            {...props}
          />

          {(rightIcon || isPasswordType) && (
            <div
              style={{
                position: 'absolute',
                right: 'var(--space-md)',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-tertiary)',
                display: 'flex',
                alignItems: 'center',
                cursor: isPasswordType ? 'pointer' : 'default',
              }}
              onClick={isPasswordType ? () => setShowPassword(!showPassword) : undefined}
            >
              {isPasswordType ? (
                showPassword ? <EyeOff size={18} /> : <Eye size={18} />
              ) : (
                rightIcon
              )}
            </div>
          )}
        </div>

        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              color: 'var(--status-error)',
              fontSize: 'var(--font-size-sm)',
              marginTop: 'var(--space-xs)',
            }}
          >
            {error}
          </motion.p>
        )}

        {helperText && !error && (
          <p
            style={{
              color: 'var(--text-tertiary)',
              fontSize: 'var(--font-size-sm)',
              marginTop: 'var(--space-xs)',
            }}
          >
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
