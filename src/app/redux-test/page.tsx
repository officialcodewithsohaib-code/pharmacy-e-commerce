'use client'

import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity } from '@/lib/features/cart/cartSlice'
import { toggleWishlist } from '@/lib/features/wishlist/wishlistSlice'
import { toggleTheme, showToast, hideToast } from '@/lib/features/ui/uiSlice'
import { formatPrice } from '@/lib/utils/formatters'
import { ShoppingCart, Heart, Sun, Moon, Plus, Minus, Trash2, X } from 'lucide-react'

export default function ReduxTestPage() {
  const dispatch = useAppDispatch()
  
  // Selectors
  const cart = useAppSelector((state) => state.cart)
  const wishlist = useAppSelector((state) => state.wishlist)
  const theme = useAppSelector((state) => state.ui.theme)
  const toast = useAppSelector((state) => state.ui.toast)

  // Test product
  const testProduct = {
    id: 'test-1',
    productId: 'prod-1',
    name: 'Test Medicine',
    slug: 'test-medicine',
    price: 299,
    quantity: 1,
    image: '/images/products/test.jpg',
    inStock: true,
    maxQuantity: 10,
  }

  const handleAddToCart = () => {
    dispatch(addToCart(testProduct))
    dispatch(showToast({ message: 'Added to cart!', type: 'success' }))
    setTimeout(() => dispatch(hideToast()), 3000)
  }

  const handleToggleWishlist = () => {
    dispatch(toggleWishlist({
      id: testProduct.id,
      productId: testProduct.productId,
      name: testProduct.name,
      slug: testProduct.slug,
      price: testProduct.price,
      image: testProduct.image,
      inStock: testProduct.inStock,
      addedAt: new Date().toISOString(),
    }))
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background-primary)', padding: 'var(--space-2xl) var(--space-md)' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <h1 style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-4xl)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--space-sm)' }}>
            🧪 Redux Store Test
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-lg)' }}>
            Test all Redux slices with Lucide React icons
          </p>
        </div>

        {/* Theme Toggle */}
        <section className="card" style={{ marginBottom: 'var(--space-xl)' }}>
          <h2 style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-md)', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
            {theme === 'light' ? <Sun size={24} /> : <Moon size={24} />}
            Theme: {theme}
          </h2>
          <button 
            onClick={() => dispatch(toggleTheme())}
            className="btn btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-sm)' }}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </section>

        {/* Cart Actions */}
        <section className="card" style={{ marginBottom: 'var(--space-xl)' }}>
          <h2 style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-md)', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
            <ShoppingCart size={24} />
            Cart ({cart.itemCount} items) - {formatPrice(cart.total)}
          </h2>
          
          <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap', marginBottom: 'var(--space-lg)' }}>
            <button 
              onClick={handleAddToCart}
              className="btn btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-sm)' }}
            >
              <Plus size={20} />
              Add Test Product
            </button>
            
            <button 
              onClick={() => dispatch(clearCart())}
              className="btn btn-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-sm)' }}
              disabled={cart.items.length === 0}
            >
              <Trash2 size={20} />
              Clear Cart
            </button>
          </div>

          {/* Cart Items */}
          {cart.items.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              {cart.items.map((item) => (
                <div 
                  key={item.id}
                  className="card card-compact"
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-md)' }}
                >
                  <div>
                    <h3 style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-xs)' }}>{item.name}</h3>
                    <p style={{ color: 'var(--primary-600)', fontWeight: 'var(--font-weight-semibold)' }}>
                      {formatPrice(item.price)} × {item.quantity} = {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                  
                  <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center' }}>
                    <button
                      onClick={() => dispatch(decrementQuantity(item.id))}
                      className="btn btn-ghost"
                      style={{ padding: 'var(--space-sm)' }}
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    
                    <span style={{ color: 'var(--text-primary)', fontWeight: 'var(--font-weight-semibold)', minWidth: '30px', textAlign: 'center' }}>
                      {item.quantity}
                    </span>
                    
                    <button
                      onClick={() => dispatch(incrementQuantity(item.id))}
                      className="btn btn-ghost"
                      style={{ padding: 'var(--space-sm)' }}
                      disabled={item.quantity >= (item.maxQuantity || 99)}
                    >
                      <Plus size={16} />
                    </button>
                    
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="btn btn-ghost"
                      style={{ padding: 'var(--space-sm)', color: 'var(--status-error)' }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Wishlist */}
        <section className="card" style={{ marginBottom: 'var(--space-xl)' }}>
          <h2 style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-md)', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
            <Heart size={24} />
            Wishlist ({wishlist.count} items)
          </h2>
          
          <button 
            onClick={handleToggleWishlist}
            className="btn btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-sm)' }}
          >
            <Heart size={20} fill={wishlist.items.some((i: any) => i.productId === testProduct.productId) ? 'currentColor' : 'none'} />
            {wishlist.items.some((i: any) => i.productId === testProduct.productId) ? 'Remove from' : 'Add to'} Wishlist
          </button>

          {wishlist.items.length > 0 && (
            <div style={{ marginTop: 'var(--space-md)' }}>
              <h3 style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-sm)' }}>Wishlist Items:</h3>
              {wishlist.items.map((item) => (
                <div key={item.id} style={{ color: 'var(--text-primary)' }}>• {item.name}</div>
              ))}
            </div>
          )}
        </section>

        {/* Toast Notification */}
        {toast && toast.isOpen && (
          <div 
            style={{
              position: 'fixed',
              bottom: 'var(--space-xl)',
              right: 'var(--space-xl)',
              backgroundColor: toast.type === 'success' ? 'var(--status-success-bg)' : 'var(--status-error-bg)',
              border: `1px solid ${toast.type === 'success' ? 'var(--status-success-border)' : 'var(--status-error-border)'}`,
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-md) var(--space-lg)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-md)',
              boxShadow: 'var(--shadow-lg)',
              zIndex: 'var(--z-toast)',
            }}
          >
            <span style={{ color: toast.type === 'success' ? 'var(--status-success)' : 'var(--status-error)', fontWeight: 'var(--font-weight-medium)' }}>
              {toast.message}
            </span>
            <button 
              onClick={() => dispatch(hideToast())}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}
            >
              <X size={18} style={{ color: 'var(--text-tertiary)' }} />
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
