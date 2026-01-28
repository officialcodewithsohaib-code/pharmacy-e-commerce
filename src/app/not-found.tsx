'use client'

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: 'var(--background-primary)' }}>
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 
            style={{ 
              color: 'var(--primary-600)',
              fontSize: '9rem',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: 'var(--line-height-none)',
              marginBottom: 0,
            }}
          >
            404
          </h1>
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
          Page Not Found
        </h2>

        {/* Description */}
        <p 
          style={{ 
            color: 'var(--text-secondary)',
            fontSize: 'var(--font-size-lg)',
            lineHeight: 'var(--line-height-relaxed)',
            marginBottom: 'var(--space-2xl)',
            maxWidth: '500px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Sorry, we couldn&apos;t find the page you&apos;re looking for. 
          The page might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', alignItems: 'center' }}>
          {/* Primary Button - Go Home */}
          <Link 
            href="/"
            className="not-found-btn primary"
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
              textDecoration: 'none',
              padding: 'var(--space-sm) var(--space-xl)',
              transition: 'var(--transition-fast)',
              border: '1px solid var(--primary-600)',
            }}
          >
            <Home size={20} />
            Go to Homepage
          </Link>

          {/* Secondary Button - Go Back */}
          <button 
            onClick={() => window.history.back()}
            className="not-found-btn secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--space-sm)',
              backgroundColor: 'transparent',
              color: 'var(--primary-600)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-md)',
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-medium)',
              cursor: 'pointer',
              padding: 'var(--space-sm) var(--space-xl)',
              transition: 'var(--transition-fast)',
            }}
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div 
          style={{ 
            borderTop: '1px solid var(--divider)',
            marginTop: 'var(--space-3xl)',
            paddingTop: 'var(--space-2xl)'
          }}
        >
          <p 
            style={{ 
              color: 'var(--text-tertiary)',
              fontSize: 'var(--font-size-sm)',
              marginBottom: 'var(--space-md)'
            }}
          >
            Here are some helpful links instead:
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)', justifyContent: 'center', alignItems: 'center' }}>
            <Link 
              href="/products" 
              style={{ 
                color: 'var(--text-link)',
                fontSize: 'var(--font-size-sm)',
                textDecoration: 'none',
                transition: 'var(--transition-fast)',
              }}
              className="not-found-link"
            >
              Browse Products
            </Link>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <Link 
              href="/categories" 
              style={{ 
                color: 'var(--text-link)',
                fontSize: 'var(--font-size-sm)',
                textDecoration: 'none',
                transition: 'var(--transition-fast)',
              }}
              className="not-found-link"
            >
              Categories
            </Link>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <Link 
              href="/contact" 
              style={{ 
                color: 'var(--text-link)',
                fontSize: 'var(--font-size-sm)',
                textDecoration: 'none',
                transition: 'var(--transition-fast)',
              }}
              className="not-found-link"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* CSS for hover effects */}
      <style jsx>{`
        .not-found-btn.primary:hover {
          background-color: var(--primary-700);
          border-color: var(--primary-700);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .not-found-btn.secondary:hover {
          background-color: var(--primary-50);
          border-color: var(--primary-600);
          transform: translateY(-2px);
        }

        .not-found-link:hover {
          color: var(--text-link-hover);
          text-decoration: underline;
        }
      `}</style>
    </div>
  )
}
