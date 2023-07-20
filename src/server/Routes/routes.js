import { Router } from 'express'
import { user } from './users.routes.js'

const routes = Router()

routes.get('/', (_req, res) => res.json({ msg: 'Todo beum' }))

export { routes, user }
