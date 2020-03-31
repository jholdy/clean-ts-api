import MongoHelper from 'infra/db/mongodb/helpers/MongoHelper'
import LogErrorRepository from 'data/protocols/db/log/LogErrorRepository'

export default class LogMongoRepository implements LogErrorRepository {
  async logError (stack: string): Promise<void> {
    const errorCollection = await MongoHelper.getCollection('errors')
    await errorCollection.insertOne({
      stack,
      date: new Date()
    })
  }
}
