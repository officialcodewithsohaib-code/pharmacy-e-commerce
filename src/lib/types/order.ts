import { CartItem } from './cart'

export interface Order {
  id: string
  userId: string
  orderNumber: string
  items: CartItem[]
  subtotal: number
  tax: number
  shipping: number
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  paymentMethod: 'cod' | 'card' | 'bank'
  paymentStatus: 'pending' | 'paid' | 'failed'
  shippingAddress: {
    fullName: string
    phone: string
    address: string
    city: string
    province: string
    postalCode: string
  }
  createdAt: string
  updatedAt?: string
  deliveredAt?: string
}
