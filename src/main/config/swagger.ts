import { Express } from 'express'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

import env from './env'

export default function swagger (app: Express): void {
  const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: 'Customer API',
        description: 'Customer API Information',
        version: '1.0.0',
        contact: {
          name: 'Jholdy Damasceno'
        },
        servers: [`http://localhost:${env.port}`]
      },
      securityDefinitions: {
        bearerAuth: {
          type: 'apiKey',
          name: 'Authorization',
          scheme: 'bearer',
          in: 'header'
        }
      }
    },
    apis: ['**/presentation/swagger/definitions.ts', '**/presentation/controllers/**/*.ts']
  }

  const swaggerDocs = swaggerJsDoc(swaggerOptions)

  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}
