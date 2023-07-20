import { config } from 'dotenv'

config()

const host = process.env.MONGO_HOST ?? 'localhost'
const port = process.env.MONGO_PORT ?? '27017'
const database = process.env.MONGO_DATABASE ?? 'rtc'
const namespace = process.env.UUID_NAMESPACE ?? '9532c2f3-af1c-4712-9f2f-3881f622332c'

export { host, port, database, namespace }
