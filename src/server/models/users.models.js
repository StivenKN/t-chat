import mongoose from 'mongoose'
import Joi from 'joi'

export const User = mongoose.model('User', {
  name: String,
  password: String
})

const PASSWORDPATTERN = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

export const userSchema = Joi.object({
  name: Joi.string().required().min(3).max(30),
  password: Joi.string().required().min(3).max(30).pattern(PASSWORDPATTERN)
})
