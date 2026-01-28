import { formatPrice, formatDate, formatRelativeTime, truncate } from '@/lib/utils/formatters'
import { isValidEmail, isValidPhone, isStrongPassword } from '@/lib/utils/validators'
import { cn } from '@/lib/utils/cn'
import { MOCK_PRODUCTS } from '@/lib/constants/mockData'
import { CATEGORIES } from '@/lib/constants/categories'

export default function TestPage() {
  return (
    <div className="container" style={{ padding: 'var(--space-2xl) var(--space-md)' }}>
      <h1 style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-xl)' }}>
        🧪 Utility Tests
      </h1>

      {/* Formatter Tests */}
      <section className="card" style={{ marginBottom: 'var(--space-xl)' }}>
        <h2 style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-md)' }}>
          💰 Formatters
        </h2>
        <div style={{ color: 'var(--text-secondary)' }}>
          <p>formatPrice(1299): <strong>{formatPrice(1299)}</strong></p>
          <p>formatDate(new Date()): <strong>{formatDate(new Date())}</strong></p>
          <p>formatRelativeTime (2 hours ago): <strong>{formatRelativeTime(new Date(Date.now() - 2 * 60 * 60 * 1000))}</strong></p>
          <p>truncate(&quot;Long text here...&quot;, 10): <strong>{truncate('Long text here...', 10)}</strong></p>
        </div>
      </section>

      {/* Validator Tests */}
      <section className="card" style={{ marginBottom: 'var(--space-xl)' }}>
        <h2 style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-md)' }}>
          ✅ Validators
        </h2>
        <div style={{ color: 'var(--text-secondary)' }}>
          <p>isValidEmail(&quot;test@example.com&quot;): <strong className={isValidEmail('test@example.com') ? 'text-success' : 'text-error'}>{String(isValidEmail('test@example.com'))}</strong></p>
          <p>isValidEmail(&quot;invalid&quot;): <strong className={!isValidEmail('invalid') ? 'text-success' : 'text-error'}>{String(isValidEmail('invalid'))}</strong></p>
          <p>isValidPhone(&quot;03001234567&quot;): <strong className={isValidPhone('03001234567') ? 'text-success' : 'text-error'}>{String(isValidPhone('03001234567'))}</strong></p>
          <p>isStrongPassword(&quot;Pass123&quot;): <strong className={isStrongPassword('Pass123') ? 'text-success' : 'text-error'}>{String(isStrongPassword('Pass123'))}</strong></p>
        </div>
      </section>

      {/* Mock Data */}
      <section className="card" style={{ marginBottom: 'var(--space-xl)' }}>
        <h2 style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-md)' }}>
          📦 Mock Products ({MOCK_PRODUCTS.length} items)
        </h2>
        <div className="grid gap-4">
          {MOCK_PRODUCTS.map(product => (
            <div key={product.id} className="card card-compact" style={{ border: '1px solid var(--border-default)' }}>
              <h3 style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-lg)' }}>{product.name}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>{product.description}</p>
              <p style={{ color: 'var(--primary-600)', fontWeight: 'var(--font-weight-semibold)' }}>{formatPrice(product.price)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="card">
        <h2 style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-md)' }}>
          📂 Categories ({CATEGORIES.length} items)
        </h2>
        <div className="grid gap-2">
          {CATEGORIES.map(cat => (
            <div key={cat.id} style={{ color: 'var(--text-secondary)' }}>
              <span style={{ marginRight: 'var(--space-sm)' }}>{cat.icon}</span>
              <strong>{cat.name}</strong> - {cat.description}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
