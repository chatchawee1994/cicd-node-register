import { register } from '../services/auth.service.js'

export function registerHandler(req, res) {
    try {
        const { email, password } = req.body
        const user = register(email, password)
        res.status(201).json({ 
            id: user.id,
            email: user.email
        })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}