import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: 'var(--background-primary)' }}>
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 
            className="text-9xl font-bold tracking-tight"
            style={{ 
              color: 'var(--primary-600)',
              lineHeight: 'var(--line-height-none)'
            }}
          >
            404
          </h1>
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
          Page Not Found
        </h2>

        {/* Description */}
        <p 
          className="text-lg mb-8 max-w-md mx-auto"
          style={{ 
            color: 'var(--text-secondary)',
            fontSize: 'var(--font-size-lg)',
            lineHeight: 'var(--line-height-relaxed)',
            marginBottom: 'var(--space-2xl)'
          }}
        >
          Sorry, we couldn&apos;t find the page you&apos;re looking for. 
          The page might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary Button - Go Home */}
          <Link 
            href="/"
            className="inline-flex items-center justify-center font-medium px-6 py-3 transition-all"
            style={{
              backgroundColor: 'var(--primary-600)',
              color: 'var(--text-inverse)',
              borderRadius: 'var(--radius-md)',
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-medium)',
              textDecoration: 'none',
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
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Go to Homepage
          </Link>

          {/* Secondary Button - Go Back */}
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center font-medium px-6 py-3 transition-all"
            style={{
              backgroundColor: 'transparent',
              color: 'var(--primary-600)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-md)',
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-medium)',
              cursor: 'pointer',
              transition: 'var(--transition-fast)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-50)'
              e.currentTarget.style.borderColor = 'var(--primary-600)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.borderColor = 'var(--border-default)'
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
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div 
          className="mt-12 pt-8"
          style={{ 
            borderTop: '1px solid var(--divider)',
            marginTop: 'var(--space-3xl)',
            paddingTop: 'var(--space-2xl)'
          }}
        >
          <p 
            className="text-sm mb-4"
            style={{ 
              color: 'var(--text-tertiary)',
              fontSize: 'var(--font-size-sm)',
              marginBottom: 'var(--space-md)'
            }}
          >
            Here are some helpful links instead:
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/products" 
              className="text-sm hover:underline"
              style={{ 
                color: 'var(--text-link)',
                fontSize: 'var(--font-size-sm)',
                textDecoration: 'none',
                transition: 'var(--transition-fast)'
              }}
            >
              Browse Products
            </Link>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <Link 
              href="/categories" 
              className="text-sm hover:underline"
              style={{ 
                color: 'var(--text-link)',
                fontSize: 'var(--font-size-sm)',
                textDecoration: 'none',
                transition: 'var(--transition-fast)'
              }}
            >
              Categories
            </Link>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <Link 
              href="/contact" 
              className="text-sm hover:underline"
              style={{ 
                color: 'var(--text-link)',
                fontSize: 'var(--font-size-sm)',
                textDecoration: 'none',
                transition: 'var(--transition-fast)'
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
