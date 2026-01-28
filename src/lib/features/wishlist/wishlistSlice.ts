import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { WishlistState, WishlistItem } from './wishlistTypes'
import { storage } from '@/lib/utils/storage'

const WISHLIST_STORAGE_KEY = 'pharmacy-wishlist'

// Load wishlist from localStorage
const loadWishlistFromStorage = (): WishlistItem[] => {
  return storage.get<WishlistItem[]>(WISHLIST_STORAGE_KEY) || []
}

const initialState: WishlistState = {
  items: loadWishlistFromStorage(),
  count: 0,
}

initialState.count = initialState.items.length

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    /**
     * Add item to wishlist
     */
    addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const exists = state.items.find(
        (item) => item.productId === action.payload.productId
      )

      if (!exists) {
        state.items.push({
          ...action.payload,
          addedAt: new Date().toISOString(),
        })
        state.count = state.items.length
        storage.set(WISHLIST_STORAGE_KEY, state.items)
      }
    },

    /**
     * Remove item from wishlist
     */
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      state.count = state.items.length
      storage.set(WISHLIST_STORAGE_KEY, state.items)
    },

    /**
     * Toggle item in wishlist
     */
    toggleWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const existingIndex = state.items.findIndex(
        (item) => item.productId === action.payload.productId
      )

      if (existingIndex >= 0) {
        state.items.splice(existingIndex, 1)
      } else {
        state.items.push({
          ...action.payload,
          addedAt: new Date().toISOString(),
        })
      }

      state.count = state.items.length
      storage.set(WISHLIST_STORAGE_KEY, state.items)
    },

    /**
     * Clear wishlist
     */
    clearWishlist: (state) => {
      state.items = []
      state.count = 0
      storage.remove(WISHLIST_STORAGE_KEY)
    },
  },
})

export const {
  addToWishlist,
  removeFromWishlist,
  toggleWishlist,
  clearWishlist,
} = wishlistSlice.actions

export default wishlistSlice.reducer
