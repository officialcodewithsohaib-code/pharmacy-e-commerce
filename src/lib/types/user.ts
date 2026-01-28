export interface User {
  id: string
  name: string
  email: string
  phone?: string
  avatar?: string
  createdAt: string
}

export interface Address {
  id: string
  userId: string
  fullName: string
  phone: string
  address: string
  city: string
  province: string
  postalCode: string
  isDefault: boolean
}
