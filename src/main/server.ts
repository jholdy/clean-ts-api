import env from './config/env'
import MongoHelper from 'infra/db/mongodb/helpers/MongoHelper'

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).app
    app.listen(env.port, '0.0.0.0', () => console.log(`Server running at http://localhost:${env.port}`))
  })
  .catch(console.error)
