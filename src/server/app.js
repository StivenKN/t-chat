import express from "express"
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

const app = express()

app.use(cors())

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/rtc')

const User = mongoose.model('User', {
  name: String,
  password: String
});

app.post('/register', (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      password: req.body.password
    })
    user.save(user)
      .then(() => {
        res.status(201).json({ msg: 'User created' })
      })
      .catch((error) => {
        res.status(400).json({ msg: error })
      })
  } catch (error) {
    res.status(404).json({ msg: error })
  }

})

app.get('/', (_req, res) => res.json({ msg: 'Todo beum' }))

export { app }