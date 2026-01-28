import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { storage } from '@/lib/utils/storage'

const THEME_STORAGE_KEY = 'pharmacy-theme'

export interface UIState {
  theme: 'light' | 'dark'
  isMobileMenuOpen: boolean
  isSearchOpen: boolean
  toast: {
    isOpen: boolean
    message: string
    type: 'success' | 'error' | 'info' | 'warning'
  } | null
}

// Load theme from localStorage or system preference
const getInitialTheme = (): 'light' | 'dark' => {
  const saved = storage.get<'light' | 'dark'>(THEME_STORAGE_KEY)
  if (saved) return saved

  // Check system preference
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }

  return 'light'
}

const initialState: UIState = {
  theme: getInitialTheme(),
  isMobileMenuOpen: false,
  isSearchOpen: false,
  toast: null,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    /**
     * Toggle theme between light and dark
     */
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
      storage.set(THEME_STORAGE_KEY, state.theme)

      // Apply theme to document
      if (typeof window !== 'undefined') {
        document.documentElement.classList.toggle('dark', state.theme === 'dark')
      }
    },

    /**
     * Set specific theme
     */
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload
      storage.set(THEME_STORAGE_KEY, state.theme)

      // Apply theme to document
      if (typeof window !== 'undefined') {
        document.documentElement.classList.toggle('dark', state.theme === 'dark')
      }
    },

    /**
     * Toggle mobile menu
     */
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen
    },

    /**
     * Close mobile menu
     */
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false
    },

    /**
     * Toggle search
     */
    toggleSearch: (state) => {
      state.isSearchOpen = !state.isSearchOpen
    },

    /**
     * Show toast notification
     */
    showToast: (
      state,
      action: PayloadAction<{
        message: string
        type: 'success' | 'error' | 'info' | 'warning'
      }>
    ) => {
      state.toast = {
        isOpen: true,
        message: action.payload.message,
        type: action.payload.type,
      }
    },

    /**
     * Hide toast notification
     */
    hideToast: (state) => {
      state.toast = null
    },
  },
})

export const {
  toggleTheme,
  setTheme,
  toggleMobileMenu,
  closeMobileMenu,
  toggleSearch,
  showToast,
  hideToast,
} = uiSlice.actions

export default uiSlice.reducer
