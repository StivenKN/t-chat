import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import { user, routes } from './Routes/routes.js'
import { connectToDatabase } from './config/db.js'

const app = express()

app.use(cors())

app.use(bodyParser.json())

connectToDatabase()
  .then(() => {
    console.log('Connected to database')
  })
  .catch((err) => {
    console.log(err)
  })

const allRoutes = [user, routes]

const APILINK = '/api/v1'

for (const route of allRoutes) {
  app.use(APILINK, route)
}

/* 
  *This is the error handler for the app.
  It will catch all the errors that are not handled by the routes.
  It will return a 500 error with the message of the error.
*/
app.use((_req, res) => {
  const errorMessage = '¡Oops! Parece que este endPoint no ha sido desbloqueado aún. ¡Vuelve más tarde!'
  return res.status(404).json({ error: errorMessage })
})

export { app }
