import { User } from '../models/users.models.js'

export const registerUser = (req, res) => {
  const user = new User({ _id: req.body._id, name: req.body.name, password: req.body.password })
  user
    .save()
    .then(() => res.status(201).json({ msg: 'User created' }))
    .catch((err) => {
      throw new Error(err)
    })
}
