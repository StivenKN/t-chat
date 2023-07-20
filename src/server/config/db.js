import mongoose from 'mongoose'
import { host, port, database } from './config.js'

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(`mongodb://${host}:${port}/${database}`)
    return
  } catch (error) {
    throw new Error(error)
  }
}
