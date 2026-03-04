import express from 'express'
import { registerHandler } from './controllers/auth.controller.js'

const app = express()
app.use(express.json())

app.use(express.json())
app.post('/register', registerHandler)

export default app