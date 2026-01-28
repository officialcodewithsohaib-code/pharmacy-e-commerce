export interface WishlistItem {
  id: string
  productId: string
  name: string
  slug: string
  price: number
  image: string
  inStock: boolean
  addedAt: string
}

export interface WishlistState {
  items: WishlistItem[]
  count: number
}
