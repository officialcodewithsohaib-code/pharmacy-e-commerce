import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { CartState, CartItem } from './cartTypes'
import { storage } from '@/lib/utils/storage'

const CART_STORAGE_KEY = 'pharmacy-cart'

// Load cart from localStorage
const loadCartFromStorage = (): CartItem[] => {
  return storage.get<CartItem[]>(CART_STORAGE_KEY) || []
}

// Calculate totals
const calculateTotals = (items: CartItem[]) => {
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0)
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  return { itemCount, total }
}

const initialState: CartState = {
  items: loadCartFromStorage(),
  total: 0,
  itemCount: 0,
  isLoading: false,
}

// Calculate initial totals
const { itemCount, total } = calculateTotals(initialState.items)
initialState.itemCount = itemCount
initialState.total = total

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    /**
     * Add item to cart or increase quantity
     */
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.productId === action.payload.productId
      )

      if (existingItem) {
        // Increase quantity (check max)
        const newQuantity = existingItem.quantity + action.payload.quantity
        const maxQty = existingItem.maxQuantity || 99
        existingItem.quantity = Math.min(newQuantity, maxQty)
      } else {
        // Add new item
        state.items.push(action.payload)
      }

      // Recalculate totals
      const totals = calculateTotals(state.items)
      state.itemCount = totals.itemCount
      state.total = totals.total

      // Save to localStorage
      storage.set(CART_STORAGE_KEY, state.items)
    },

    /**
     * Remove item from cart
     */
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)

      // Recalculate totals
      const totals = calculateTotals(state.items)
      state.itemCount = totals.itemCount
      state.total = totals.total

      // Save to localStorage
      storage.set(CART_STORAGE_KEY, state.items)
    },

    /**
     * Update item quantity
     */
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const item = state.items.find((i) => i.id === action.payload.id)
      if (item) {
        const maxQty = item.maxQuantity || 99
        item.quantity = Math.min(Math.max(1, action.payload.quantity), maxQty)

        // Recalculate totals
        const totals = calculateTotals(state.items)
        state.itemCount = totals.itemCount
        state.total = totals.total

        // Save to localStorage
        storage.set(CART_STORAGE_KEY, state.items)
      }
    },

    /**
     * Increase item quantity by 1
     */
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((i) => i.id === action.payload)
      if (item) {
        const maxQty = item.maxQuantity || 99
        if (item.quantity < maxQty) {
          item.quantity += 1

          // Recalculate totals
          const totals = calculateTotals(state.items)
          state.itemCount = totals.itemCount
          state.total = totals.total

          // Save to localStorage
          storage.set(CART_STORAGE_KEY, state.items)
        }
      }
    },

    /**
     * Decrease item quantity by 1
     */
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((i) => i.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity -= 1

        // Recalculate totals
        const totals = calculateTotals(state.items)
        state.itemCount = totals.itemCount
        state.total = totals.total

        // Save to localStorage
        storage.set(CART_STORAGE_KEY, state.items)
      }
    },

    /**
     * Clear entire cart
     */
    clearCart: (state) => {
      state.items = []
      state.itemCount = 0
      state.total = 0
      storage.remove(CART_STORAGE_KEY)
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer
