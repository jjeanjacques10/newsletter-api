import express from 'express'
import setupRoute from './routes'
import setupMiddleware from './middlewares'
const app = express()
setupMiddleware(app)
setupRoute(app)
export { app }
