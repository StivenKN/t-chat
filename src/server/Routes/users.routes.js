import { Router } from 'express'
import { authUser, cryptPassword } from '../Middlewares/user.middlewares.js'
import { registerUser } from '../controllers/users.controllers.js'

const user = Router()

user.post('/register', authUser, cryptPassword, registerUser)

export { user }
