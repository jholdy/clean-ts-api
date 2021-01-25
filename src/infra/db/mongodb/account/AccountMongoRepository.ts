import MongoHelper from 'infra/db/mongodb/helpers/MongoHelper'
import Account from 'domain/models/Account'
import AddAccountRepository from 'data/protocols/db/account/AddAccountRepository'
import LoadAccountByEmailRepository from 'data/protocols/db/account/LoadAccountByEmailRepository'
import UpdateAccessTokenRepository from 'data/protocols/db/account/UpdateAccessTokenRepository'
import AddAccountParans from 'domain/usecases/AddAccountParans'

export default class AccountMongoRepository implements AddAccountRepository, LoadAccountByEmailRepository, UpdateAccessTokenRepository {
  async add (accountData: AddAccountParans): Promise<Account> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    return MongoHelper.map(result.ops[0])
  }

  async loadByEmail (email: string): Promise<Account> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({ email })
    return account && MongoHelper.map(account)
  }

  async updateAccessToken (id: string, token: string): Promise<void> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.updateOne({
      _id: id
    }, {
      $set: {
        accessToken: token
      }
    })
  }
}
