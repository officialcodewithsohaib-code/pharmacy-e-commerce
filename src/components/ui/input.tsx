'use client'

import * as React from 'react'
import { cn } from '@/lib/utils/cn'
import { Eye, EyeOff } from 'lucide-react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      disabled,
      style,
      id,
      name,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [showPassword, setShowPassword] = React.useState(false)
    const inputId = id || name || `input-${Math.random().toString(36).substr(2, 9)}`
    const inputType = type === 'password' && showPassword ? 'text' : type

    const inputStyles: React.CSSProperties = {
      width: '100%',
      backgroundColor: 'var(--input-bg)',
      border: error
        ? '2px solid var(--status-error)'
        : isFocused
        ? '2px solid var(--primary-500)'
        : '1px solid var(--border-default)',
      color: 'var(--text-primary)',
      padding: leftIcon ? 'var(--space-sm) var(--space-lg) var(--space-sm) var(--space-3xl)' : 'var(--space-sm) var(--space-lg)',
      paddingRight: type === 'password' || rightIcon ? 'var(--space-3xl)' : 'var(--space-lg)',
      borderRadius: 'var(--radius-md)',
      fontSize: 'var(--font-size-base)',
      transition: 'all 0.2s ease-in-out',
      outline: 'none',
      opacity: disabled ? 0.6 : 1,
      cursor: disabled ? 'not-allowed' : 'text',
      transform: isFocused ? 'scale(1.01)' : 'scale(1)',
      boxShadow: isFocused ? '0 0 0 3px rgba(59, 130, 246, 0.1)' : 'none',
      ...style,
    }

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)
      onFocus?.(e)
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      onBlur?.(e)
    }

    return (
      <div style={{ width: '100%', position: 'relative' }} className={cn(className)}>
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            style={{
              display: 'block',
              marginBottom: 'var(--space-xs)',
              color: error ? 'var(--status-error)' : 'var(--text-primary)',
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-medium)',
              transition: 'color 0.2s ease-in-out',
            }}
          >
            {label}
          </label>
        )}

        {/* Input Container */}
        <div style={{ position: 'relative', width: '100%' }}>
          {/* Left Icon */}
          {leftIcon && (
            <div
              style={{
                position: 'absolute',
                left: 'var(--space-md)',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                alignItems: 'center',
                color: error ? 'var(--status-error)' : isFocused ? 'var(--primary-500)' : 'var(--text-tertiary)',
                transition: 'color 0.2s ease-in-out',
                pointerEvents: 'none',
              }}
            >
              {leftIcon}
            </div>
          )}

          {/* Input Field */}
          <input
            ref={ref}
            type={inputType}
            style={inputStyles}
            disabled={disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            id={inputId}
            name={name}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
            {...props}
          />

          {/* Right Icon or Password Toggle */}
          {(type === 'password' || rightIcon) && (
            <div
              style={{
                position: 'absolute',
                right: 'var(--space-md)',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                alignItems: 'center',
                color: isFocused ? 'var(--primary-500)' : 'var(--text-tertiary)',
                transition: 'color 0.2s ease-in-out',
              }}
            >
              {type === 'password' ? (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    color: 'inherit',
                  }}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              ) : (
                rightIcon
              )}
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <p
            id={`${inputId}-error`}
            style={{
              marginTop: 'var(--space-xs)',
              color: 'var(--status-error)',
              fontSize: 'var(--font-size-sm)',
              animation: 'fadeIn 0.2s ease-in-out',
            }}
          >
            {error}
          </p>
        )}

        {/* Helper Text */}
        {!error && helperText && (
          <p
            id={`${inputId}-helper`}
            style={{
              marginTop: 'var(--space-xs)',
              color: 'var(--text-tertiary)',
              fontSize: 'var(--font-size-sm)',
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
