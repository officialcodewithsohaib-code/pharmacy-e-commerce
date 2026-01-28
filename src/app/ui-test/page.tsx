'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { Modal } from '@/components/ui/modal'
import { 
  ShoppingCart, 
  Heart, 
  Search, 
  Plus, 
  Trash2, 
  Edit,
  Check,
  X,
  Mail,
  Lock,
  User
} from 'lucide-react'

export default function UITestPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLoadingTest = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div style={{ backgroundColor: 'var(--background-primary)', minHeight: '100vh', padding: 'var(--space-2xl) var(--space-md)' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: 'var(--space-3xl)' }}>
          <h1 style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-5xl)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--space-sm)' }}>
            🎨 UI Components Test
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-lg)' }}>
            Aceternity UI style components with your pharmacy theme
          </p>
        </div>

        {/* Buttons Section */}
        <Card style={{ marginBottom: 'var(--space-xl)' }}>
          <CardHeader>
            <CardTitle>Buttons (Animated Hover & Click)</CardTitle>
            <CardDescription>All button variants with Lucide icons</CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
              <Button variant="primary" leftIcon={<ShoppingCart size={18} />}>
                Add to Cart
              </Button>
              <Button variant="secondary" leftIcon={<Heart size={18} />}>
                Add to Wishlist
              </Button>
              <Button variant="outline" rightIcon={<Plus size={18} />}>
                Create New
              </Button>
              <Button variant="ghost" leftIcon={<Edit size={18} />}>
                Edit
              </Button>
              <Button variant="danger" leftIcon={<Trash2 size={18} />}>
                Delete
              </Button>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)', marginTop: 'var(--space-lg)' }}>
              <Button size="sm" variant="primary">Small Button</Button>
              <Button size="md" variant="primary">Medium Button</Button>
              <Button size="lg" variant="primary">Large Button</Button>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)', marginTop: 'var(--space-lg)' }}>
              <Button 
                variant="primary" 
                isLoading={isLoading}
                loadingText="Processing..."
                onClick={handleLoadingTest}
              >
                Test Loading
              </Button>
              <Button variant="primary" disabled>
                Disabled Button
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Inputs Section */}
        <Card style={{ marginBottom: 'var(--space-xl)' }}>
          <CardHeader>
            <CardTitle>Input Fields (Animated Focus)</CardTitle>
            <CardDescription>With icons, validation, and password toggle</CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                leftIcon={<Mail size={18} />}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                helperText="We'll never share your email"
              />

              <Input
                label="Password"
                type="password"
                placeholder="Enter password"
                leftIcon={<Lock size={18} />}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Input
                label="Search Products"
                type="text"
                placeholder="Search for medicines..."
                leftIcon={<Search size={18} />}
              />

              <Input
                label="Username"
                type="text"
                placeholder="Enter username"
                leftIcon={<User size={18} />}
                error="Username already taken"
              />
            </div>
          </CardContent>
        </Card>

        {/* Cards Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-lg)', marginBottom: 'var(--space-xl)' }}>
          <Card hoverable>
            <CardHeader>
              <CardTitle>Hoverable Card</CardTitle>
              <CardDescription>Hover over me to see animation</CardDescription>
            </CardHeader>
            <CardContent>
              <p style={{ color: 'var(--text-secondary)' }}>
                This card lifts up when you hover over it with a smooth animation.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">Learn More</Button>
            </CardFooter>
          </Card>

          <Card clickable onClick={() => setIsModalOpen(true)}>
            <CardHeader>
              <CardTitle>Clickable Card</CardTitle>
              <CardDescription>Click me to open modal</CardDescription>
            </CardHeader>
            <CardContent>
              <p style={{ color: 'var(--text-secondary)' }}>
                This entire card is clickable and will open a modal dialog.
              </p>
            </CardContent>
            <CardFooter>
              <Badge variant="info">Click to Open</Badge>
            </CardFooter>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Elevated Card</CardTitle>
              <CardDescription>With higher shadow</CardDescription>
            </CardHeader>
            <CardContent>
              <p style={{ color: 'var(--text-secondary)' }}>
                This card has more elevation with a larger shadow.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Badges Section */}
        <Card style={{ marginBottom: 'var(--space-xl)' }}>
          <CardHeader>
            <CardTitle>Badges (Animated Entrance)</CardTitle>
            <CardDescription>Status indicators with various styles</CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
              <Badge variant="default">Default</Badge>
              <Badge variant="success" dot>In Stock</Badge>
              <Badge variant="error" dot>Out of Stock</Badge>
              <Badge variant="warning" dot>Low Stock</Badge>
              <Badge variant="info" dot>New Arrival</Badge>
              <Badge variant="outline">Prescription Required</Badge>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)', marginTop: 'var(--space-lg)' }}>
              <Badge size="sm" variant="success">Small</Badge>
              <Badge size="md" variant="success">Medium</Badge>
              <Badge size="lg" variant="success">Large</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Skeletons Section */}
        <Card style={{ marginBottom: 'var(--space-xl)' }}>
          <CardHeader>
            <CardTitle>Loading Skeletons (Pulse Animation)</CardTitle>
            <CardDescription>Smooth loading placeholders</CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                <Skeleton variant="circular" width="60px" height="60px" />
                <div style={{ flex: 1 }}>
                  <Skeleton variant="text" width="40%" height="20px" />
                  <Skeleton variant="text" width="80%" height="16px" style={{ marginTop: 'var(--space-sm)' }} />
                </div>
              </div>

              <Skeleton variant="rectangular" width="100%" height="200px" />
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-md)' }}>
                <Skeleton variant="rectangular" height="120px" />
                <Skeleton variant="rectangular" height="120px" />
                <Skeleton variant="rectangular" height="120px" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Modal Dialog"
          description="This is an animated modal with smooth entrance/exit"
          size="md"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <p style={{ color: 'var(--text-secondary)' }}>
              This modal has:
            </p>
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: 'var(--space-lg)' }}>
              <li>Smooth scale + fade animation</li>
              <li>Backdrop blur effect</li>
              <li>Body scroll lock</li>
              <li>Click outside to close</li>
              <li>Keyboard ESC support (coming soon)</li>
            </ul>

            <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'flex-end', marginTop: 'var(--space-md)' }}>
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" leftIcon={<Check size={18} />}>
                Confirm
              </Button>
            </div>
          </div>
        </Modal>

      </div>
    </div>
  )
}
