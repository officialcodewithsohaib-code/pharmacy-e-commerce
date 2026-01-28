'use client'

import { useRef, useEffect } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '@/lib/store'
import { setTheme } from '@/lib/features/ui/uiSlice'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore | null>(null)

  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  // Apply theme on mount
  useEffect(() => {
    if (storeRef.current) {
      const theme = storeRef.current.getState().ui.theme
      document.documentElement.classList.toggle('dark', theme === 'dark')
    }
  }, [])

  return <Provider store={storeRef.current}>{children}</Provider>
}
