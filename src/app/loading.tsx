'use client'

export default function Loading() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: 'var(--background-primary)' }}
    >
      <div className="text-center">
        {/* Animated Spinner */}
        <div className="relative mb-6 inline-block">
          <svg 
            className="loading-spinner"
            width="80" 
            height="80" 
            viewBox="0 0 50 50"
          >
            <circle
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="var(--primary-600)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="80, 200"
              strokeDashoffset="0"
            />
          </svg>
        </div>

        {/* Loading Text */}
        <h2 
          style={{ 
            color: 'var(--text-primary)',
            fontSize: 'var(--font-size-xl)',
            fontWeight: 'var(--font-weight-semibold)',
            marginBottom: 'var(--space-sm)'
          }}
        >
          Loading...
        </h2>

        <p 
          style={{ 
            color: 'var(--text-tertiary)',
            fontSize: 'var(--font-size-base)'
          }}
        >
          Please wait while we prepare your content
        </p>

        {/* Loading Dots */}
        <div 
          style={{ 
            display: 'flex', 
            gap: 'var(--space-sm)', 
            justifyContent: 'center',
            marginTop: 'var(--space-lg)'
          }}
        >
          <span className="loading-dot" style={{ animationDelay: '0ms' }} />
          <span className="loading-dot" style={{ animationDelay: '160ms' }} />
          <span className="loading-dot" style={{ animationDelay: '320ms' }} />
        </div>
      </div>

      <style jsx>{`
        .loading-spinner {
          animation: spin 1s linear infinite;
        }

        .loading-spinner circle {
          animation: dash 1.5s ease-in-out infinite;
        }

        .loading-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--primary-600);
          display: inline-block;
          animation: bounce 1.4s infinite ease-in-out both;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes dash {
          0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 90, 200;
            stroke-dashoffset: -35px;
          }
          100% {
            stroke-dasharray: 90, 200;
            stroke-dashoffset: -125px;
          }
        }

        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
            opacity: 0.5;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
