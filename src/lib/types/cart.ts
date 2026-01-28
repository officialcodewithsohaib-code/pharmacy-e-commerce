export interface CartItem {
  id: string
  productId: string
  name: string
  slug: string
  price: number
  quantity: number
  image: string
  inStock: boolean
  maxQuantity?: number
}

export interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
}
