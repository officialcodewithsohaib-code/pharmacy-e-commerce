'use client'

import { useEffect } from 'react'
import { AlertCircle, RotateCw, Home } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: 'var(--background-primary)' }}>
      <div className="text-center max-w-2xl mx-auto">
        {/* Error Icon */}
        <div 
          style={{ 
            marginBottom: 'var(--space-xl)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '96px',
            height: '96px',
            borderRadius: '50%',
            backgroundColor: 'var(--status-error-bg)',
          }}
        >
          <AlertCircle size={48} style={{ color: 'var(--status-error)' }} />
        </div>

        {/* Title */}
        <h2 
          style={{ 
            color: 'var(--text-primary)',
            fontSize: 'var(--font-size-4xl)',
            fontWeight: 'var(--font-weight-bold)',
            marginBottom: 'var(--space-md)'
          }}
        >
          Something Went Wrong
        </h2>

        {/* Description */}
        <p 
          style={{ 
            color: 'var(--text-secondary)',
            fontSize: 'var(--font-size-lg)',
            lineHeight: 'var(--line-height-relaxed)',
            marginBottom: 'var(--space-sm)',
            maxWidth: '500px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          We encountered an unexpected error while processing your request.
        </p>

        {/* Error Message (Development only) */}
        {process.env.NODE_ENV === 'development' && error.message && (
          <div 
            style={{
              backgroundColor: 'var(--status-error-bg)',
              border: '1px solid var(--status-error-border)',
              borderRadius: 'var(--radius-md)',
              marginTop: 'var(--space-lg)',
              marginBottom: 'var(--space-lg)',
              padding: 'var(--space-md)',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'left',
            }}
          >
            <p 
              style={{ 
                color: 'var(--status-error)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: 'var(--space-xs)'
              }}
            >
              Error Details (Development Mode):
            </p>
            <code 
              style={{ 
                color: 'var(--text-secondary)',
                fontSize: 'var(--font-size-xs)',
                fontFamily: 'var(--font-mono), monospace',
                wordBreak: 'break-all',
              }}
            >
              {error.message}
            </code>
          </div>
        )}

        {/* Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', alignItems: 'center', marginTop: 'var(--space-2xl)' }}>
          {/* Primary Button - Try Again */}
          <button 
            onClick={reset}
            className="error-btn primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--space-sm)',
              backgroundColor: 'var(--primary-600)',
              color: 'var(--text-inverse)',
              borderRadius: 'var(--radius-md)',
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-medium)',
              border: 'none',
              cursor: 'pointer',
              padding: 'var(--space-sm) var(--space-xl)',
              transition: 'var(--transition-fast)',
            }}
          >
            <RotateCw size={20} />
            Try Again
          </button>

          {/* Secondary Button - Go Home */}
          <a
            href="/"
            className="error-btn secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--space-sm)',
              backgroundColor: 'transparent',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-md)',
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-medium)',
              textDecoration: 'none',
              cursor: 'pointer',
              padding: 'var(--space-sm) var(--space-xl)',
              transition: 'var(--transition-fast)',
            }}
          >
            <Home size={20} />
            Go to Homepage
          </a>
        </div>

        {/* Help Text */}
        <p 
          style={{ 
            color: 'var(--text-tertiary)',
            fontSize: 'var(--font-size-sm)',
            marginTop: 'var(--space-2xl)'
          }}
        >
          If this problem persists, please{' '}
          <a 
            href="/contact"
            style={{ 
              color: 'var(--text-link)',
              textDecoration: 'underline'
            }}
          >
            contact our support team
          </a>
          .
        </p>
      </div>

      {/* CSS for hover effects */}
      <style jsx>{`
        .error-btn.primary:hover {
          background-color: var(--primary-700);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .error-btn.secondary:hover {
          background-color: var(--background-secondary);
          color: var(--text-primary);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  )
}
