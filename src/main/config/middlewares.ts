import { Express } from 'express'
import { bodyParser } from 'main/middlewares/bodyParser'
import { cors } from 'main/middlewares/cors'
import { contentType } from 'main/middlewares/contentType'

export default function middlewares (app: Express): void {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
}
