import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AuthState, User } from './authTypes'
import { storage } from '@/lib/utils/storage'

const AUTH_STORAGE_KEY = 'pharmacy-user'

// Load user from localStorage
const loadUserFromStorage = (): User | null => {
  return storage.get<User>(AUTH_STORAGE_KEY)
}

const initialState: AuthState = {
  user: loadUserFromStorage(),
  isAuthenticated: !!loadUserFromStorage(),
  isLoading: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /**
     * Login user
     */
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.isAuthenticated = true
      state.isLoading = false
      storage.set(AUTH_STORAGE_KEY, action.payload)
    },

    /**
     * Logout user
     */
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
      state.isLoading = false
      storage.remove(AUTH_STORAGE_KEY)
    },

    /**
     * Update user profile
     */
    updateProfile: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload }
        storage.set(AUTH_STORAGE_KEY, state.user)
      }
    },

    /**
     * Set loading state
     */
    setAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
})

export const { login, logout, updateProfile, setAuthLoading } = authSlice.actions

export default authSlice.reducer
