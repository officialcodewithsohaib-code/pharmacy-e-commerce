export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  originalPrice?: number
  discount?: number
  category: string
  categorySlug: string
  brand?: string
  image: string
  images?: string[]
  inStock: boolean
  stock?: number
  rating?: number
  reviewCount?: number
  prescription?: boolean
  tags?: string[]
  features?: string[]
  createdAt: string
  updatedAt?: string
}

export interface ProductFilter {
  category?: string
  minPrice?: number
  maxPrice?: number
  inStock?: boolean
  prescription?: boolean
  brand?: string[]
  rating?: number
  search?: string
  sortBy?: 'price-asc' | 'price-desc' | 'name' | 'rating' | 'newest'
}
