import { Router } from 'express'
import { checkExistingUsername, createUuid, cryptPassword, validateRequest } from '../Middlewares/user.middlewares.js'
import { registerUser } from '../controllers/users.controllers.js'

const user = Router()

user.post('/register', validateRequest, checkExistingUsername, createUuid, cryptPassword, registerUser)

export { user }
