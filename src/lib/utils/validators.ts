/**
 * Email validation
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Phone number validation (Pakistan format)
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(\+92|0)?3[0-9]{9}$/
  return phoneRegex.test(phone.replace(/[\s-]/g, ''))
}

/**
 * Password strength validation
 * At least 8 characters, 1 uppercase, 1 lowercase, 1 number
 */
export function isStrongPassword(password: string): boolean {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
  return passwordRegex.test(password)
}

/**
 * Validate required field
 */
export function isRequired(value: string | undefined | null): boolean {
  return value !== undefined && value !== null && value.trim() !== ''
}

/**
 * Validate minimum length
 */
export function minLength(value: string, min: number): boolean {
  return value.length >= min
}

/**
 * Validate maximum length
 */
export function maxLength(value: string, max: number): boolean {
  return value.length <= max
}
