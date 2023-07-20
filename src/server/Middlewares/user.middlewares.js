import bcrypt from 'bcrypt'
import { v5 as uuidv5 } from 'uuid'
import { User, userSchema } from '../models/users.models.js'
import { namespace } from '../config/config.js'

export const validateRequest = async (req, res, next) => {
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

export const checkExistingUsername = async (req, res, next) => {
  User.findOne({ name: req.body.name })
    .then((user) => {
      if (user) throw new Error('Username already exists')
      next()
    })
    .catch(() => {
      res.status(400).json({ error: 'User already exists' })
    })
}

export const createUuid = (req, res, next) => {
  try {
    req.body._id = uuidv5(req.body.name, namespace)
    next()
  } catch (error) {
    res.status(500).json({ error: 'DB_ERROR' })
  }
}
