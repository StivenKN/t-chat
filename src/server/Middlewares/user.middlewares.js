import bcrypt from 'bcrypt'
import { userSchema } from '../models/users.models.js'

export const authUser = async (req, res, next) => {
  const { name, password } = req.body
  try {
    await userSchema.validateAsync({ name, password })
    next()
  } catch (error) {
    res.status(400).json({ error: error.details[0].message })
  }
}

export const cryptPassword = async (req, res, next) => {
  const { password } = req.body
  const salt = 10
  try {
    const hashedPassword = await bcrypt.hash(password, salt)
    req.body.password = hashedPassword
    next()
  } catch (error) {
    res.status(400).json({ error: error.details[0].message })
  }
}
