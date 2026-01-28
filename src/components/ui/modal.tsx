'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  closeOnOverlayClick?: boolean
  showCloseButton?: boolean
  className?: string
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = 'md',
  closeOnOverlayClick = true,
  showCloseButton = true,
  className,
}) => {
  const sizeStyles = {
    sm: { maxWidth: '400px' },
    md: { maxWidth: '600px' },
    lg: { maxWidth: '800px' },
    xl: { maxWidth: '1000px' },
    full: { maxWidth: '95vw', minHeight: '95vh' },
  }

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeOnOverlayClick ? onClose : undefined}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'var(--overlay)',
              zIndex: 'var(--z-modal-backdrop)',
              backdropFilter: 'blur(4px)',
            }}
          />

          {/* Modal */}
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 'var(--z-modal)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'var(--space-md)',
              overflow: 'auto',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              style={{
                backgroundColor: 'var(--surface-elevated)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-xl)',
                width: '100%',
                ...sizeStyles[size],
                position: 'relative',
              }}
              className={cn(className)}
            >
              {/* Header */}
              {(title || showCloseButton) && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 'var(--space-xl)',
                    paddingBottom: description ? 'var(--space-md)' : 'var(--space-xl)',
                    borderBottom: description ? 'none' : '1px solid var(--border-light)',
                  }}
                >
                  <div>
                    {title && (
                      <h2
                        style={{
                          color: 'var(--text-primary)',
                          fontSize: 'var(--font-size-2xl)',
                          fontWeight: 'var(--font-weight-semibold)',
                        }}
                      >
                        {title}
                      </h2>
                    )}
                    {description && (
                      <p
                        style={{
                          color: 'var(--text-secondary)',
                          fontSize: 'var(--font-size-sm)',
                          marginTop: 'var(--space-xs)',
                        }}
                      >
                        {description}
                      </p>
                    )}
                  </div>

                  {showCloseButton && (
                    <button
                      onClick={onClose}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        borderRadius: 'var(--radius-md)',
                        border: 'none',
                        backgroundColor: 'transparent',
                        color: 'var(--text-tertiary)',
                        cursor: 'pointer',
                        transition: 'var(--transition-fast)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--background-tertiary)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                      }}
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>
              )}

              {description && (
                <div
                  style={{
                    padding: '0 var(--space-xl) var(--space-md)',
                    borderBottom: '1px solid var(--border-light)',
                  }}
                />
              )}

              {/* Content */}
              <div
                style={{
                  padding: 'var(--space-xl)',
                  maxHeight: '70vh',
                  overflow: 'auto',
                }}
              >
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

Modal.displayName = 'Modal'

export { Modal }
