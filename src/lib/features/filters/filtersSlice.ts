import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FiltersState {
  category: string | null
  minPrice: number
  maxPrice: number
  inStock: boolean
  prescription: boolean | null
  brands: string[]
  rating: number | null
  search: string
  sortBy: 'price-asc' | 'price-desc' | 'name' | 'rating' | 'newest'
}

const initialState: FiltersState = {
  category: null,
  minPrice: 0,
  maxPrice: 10000,
  inStock: false,
  prescription: null,
  brands: [],
  rating: null,
  search: '',
  sortBy: 'newest',
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string | null>) => {
      state.category = action.payload
    },
    setPriceRange: (
      state,
      action: PayloadAction<{ min: number; max: number }>
    ) => {
      state.minPrice = action.payload.min
      state.maxPrice = action.payload.max
    },
    toggleInStock: (state) => {
      state.inStock = !state.inStock
    },
    setPrescription: (state, action: PayloadAction<boolean | null>) => {
      state.prescription = action.payload
    },
    toggleBrand: (state, action: PayloadAction<string>) => {
      const index = state.brands.indexOf(action.payload)
      if (index >= 0) {
        state.brands.splice(index, 1)
      } else {
        state.brands.push(action.payload)
      }
    },
    setRating: (state, action: PayloadAction<number | null>) => {
      state.rating = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setSortBy: (state, action: PayloadAction<FiltersState['sortBy']>) => {
      state.sortBy = action.payload
    },
    resetFilters: () => initialState,
  },
})

export const {
  setCategory,
  setPriceRange,
  toggleInStock,
  setPrescription,
  toggleBrand,
  setRating,
  setSearch,
  setSortBy,
  resetFilters,
} = filtersSlice.actions

export default filtersSlice.reducer
