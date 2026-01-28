'use client'

import { useEffect } from 'react'

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
          className="mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full"
          style={{ 
            backgroundColor: 'var(--status-error-bg)',
            marginBottom: 'var(--space-xl)'
          }}
        >
          <svg 
            width="48" 
            height="48" 
            fill="none" 
            stroke="var(--status-error)" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>

        {/* Title */}
        <h2 
          className="text-4xl font-bold mb-4"
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
          className="text-lg mb-2 max-w-md mx-auto"
          style={{ 
            color: 'var(--text-secondary)',
            fontSize: 'var(--font-size-lg)',
            lineHeight: 'var(--line-height-relaxed)',
            marginBottom: 'var(--space-sm)'
          }}
        >
          We encountered an unexpected error while processing your request.
        </p>

        {/* Error Message (Development only) */}
        {process.env.NODE_ENV === 'development' && error.message && (
          <div 
            className="my-6 p-4 text-left max-w-lg mx-auto"
            style={{
              backgroundColor: 'var(--status-error-bg)',
              border: '1px solid var(--status-error-border)',
              borderRadius: 'var(--radius-md)',
              marginTop: 'var(--space-lg)',
              marginBottom: 'var(--space-lg)',
              padding: 'var(--space-md)'
            }}
          >
            <p 
              className="text-sm font-medium mb-2"
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
              className="text-xs break-all"
              style={{ 
                color: 'var(--text-secondary)',
                fontSize: 'var(--font-size-xs)',
                fontFamily: 'var(--font-mono), monospace'
              }}
            >
              {error.message}
            </code>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          {/* Primary Button - Try Again */}
          <button 
            onClick={reset}
            className="inline-flex items-center justify-center font-medium px-6 py-3 transition-all"
            style={{
              backgroundColor: 'var(--primary-600)',
              color: 'var(--text-inverse)',
              borderRadius: 'var(--radius-md)',
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-medium)',
              border: 'none',
              cursor: 'pointer',
              transition: 'var(--transition-fast)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-700)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-600)'
            }}
          >
            <svg 
              className="mr-2" 
              width="20" 
              height="20" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <polyline points="23 4 23 10 17 10" />
              <polyline points="1 20 1 14 7 14" />
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
            Try Again
          </button>

          {/* Secondary Button - Go Home */}
          <a
            href="/"
            className="inline-flex items-center justify-center font-medium px-6 py-3 transition-all"
            style={{
              backgroundColor: 'transparent',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-md)',
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-medium)',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'var(--transition-fast)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--background-secondary)'
              e.currentTarget.style.color = 'var(--text-primary)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'var(--text-secondary)'
            }}
          >
            Go to Homepage
          </a>
        </div>

        {/* Help Text */}
        <p 
          className="text-sm mt-8"
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
    </div>
  )
}
