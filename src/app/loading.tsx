'use client'
export default function Loading() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: 'var(--background-primary)' }}
    >
      <div className="text-center">
        {/* Animated Spinner */}
        <div className="relative mb-6">
          {/* Outer Ring */}
          <div 
            className="w-20 h-20 rounded-full border-4 border-opacity-20 absolute"
            style={{ 
              borderColor: 'var(--primary-600)',
              opacity: 0.2
            }}
          />
          
          {/* Spinning Ring */}
          <div 
            className="w-20 h-20 rounded-full border-4 border-t-transparent animate-spin"
            style={{ 
              borderColor: 'var(--primary-600)',
              borderTopColor: 'transparent',
              animation: 'spin 1s linear infinite'
            }}
          />
        </div>

        {/* Loading Text */}
        <h2 
          className="text-xl font-semibold mb-2"
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
          className="text-base"
          style={{ 
            color: 'var(--text-tertiary)',
            fontSize: 'var(--font-size-base)'
          }}
        >
          Please wait while we prepare your content
        </p>

        {/* Loading Dots Animation */}
        <div 
          className="flex gap-2 justify-center mt-4"
          style={{ marginTop: 'var(--space-lg)' }}
        >
          <span 
            className="w-2 h-2 rounded-full animate-bounce"
            style={{ 
              backgroundColor: 'var(--primary-600)',
              animationDelay: '0ms',
              animation: 'bounce 1.4s infinite ease-in-out both'
            }}
          />
          <span 
            className="w-2 h-2 rounded-full animate-bounce"
            style={{ 
              backgroundColor: 'var(--primary-600)',
              animationDelay: '160ms',
              animation: 'bounce 1.4s infinite ease-in-out both'
            }}
          />
          <span 
            className="w-2 h-2 rounded-full animate-bounce"
            style={{ 
              backgroundColor: 'var(--primary-600)',
              animationDelay: '320ms',
              animation: 'bounce 1.4s infinite ease-in-out both'
            }}
          />
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
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
