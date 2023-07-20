import { User } from '../models/users.models.js'

export const registerUser = (req, res) => {
  const user = new User({ name: req.body.name, password: req.body.password })
  user
    .save()
    .then(() => res.status(201).json({ msg: 'User created' }))
    .catch((err) => {
      throw new Error(err)
    })
}
