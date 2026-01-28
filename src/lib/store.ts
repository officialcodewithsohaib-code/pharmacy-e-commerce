import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import wishlistReducer from './features/wishlist/wishlistSlice'
import authReducer from './features/auth/authSlice'
import uiReducer from './features/ui/uiSlice'
import filtersReducer from './features/filters/filtersSlice'

/**
 * Create Redux store
 * Using makeStore function for Next.js App Router compatibility
 */
export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      wishlist: wishlistReducer,
      auth: authReducer,
      ui: uiReducer,
      filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore these action types for date serialization
          ignoredActions: ['cart/addToCart', 'orders/createOrder'],
        },
      }),
  })
}

// Infer types from store
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
