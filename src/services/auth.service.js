import { isValidEmail, isStrongPassword } from '../utils/validator.js'
import { hashPassword } from '../utils/hash.js'
import { findByEmail , save } from '../data/user.store.js'

export function register(email, password) {
    if (!isValidEmail(email)) {
        throw new Error('Invalid email format')
    }

    if (!isStrongPassword(password)) {
        throw new Error('Password must be at least 6 characters long')
    }

    if (findByEmail(email)) {
        throw new Error('Email already exists')
    }

    const hashedPassword = hashPassword(password)
    const user = { email, password: hashedPassword }
    return save(user)
}