import { config } from 'dotenv'

config()

const host = process.env.MONGO_HOST ?? 'localhost'
const port = process.env.MONGO_PORT ?? '27017'
const database = process.env.MONGO_DATABASE ?? 'rtc'

export { host, port, database }
