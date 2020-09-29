import express from 'express'
import setupMiddlewares from './middlewares'
import setupRoutes from './routes'
import swagger from './swagger'

export const app = express()
swagger(app)
setupMiddlewares(app)
setupRoutes(app)
