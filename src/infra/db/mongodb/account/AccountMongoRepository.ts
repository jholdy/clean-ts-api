import MongoHelper from 'infra/db/mongodb/helpers/MongoHelper'
import QueryBuilder from 'infra/db/mongodb/helpers/QueryBuilder'
import Account from 'domain/models/Account'
import AddAccountRepository from 'data/protocols/db/account/AddAccountRepository'
import LoadAccountByEmailRepository from 'data/protocols/db/account/LoadAccountByEmailRepository'
import UpdateAccessTokenRepository from 'data/protocols/db/account/UpdateAccessTokenRepository'
import AddAccountParans from 'domain/usecases/AddAccountParans'
import LoadAccountsRepository from 'data/protocols/db/account/LoadAccountsRepository'
import LoadAccountByTokenRepository from 'data/protocols/db/account/LoadAccountByTokenRepository'
import LoadAccountByTokenResponse from 'domain/usecases/LoadAccountByTokenResponse'

export default class AccountMongoRepository implements AddAccountRepository, LoadAccountByEmailRepository, UpdateAccessTokenRepository, LoadAccountsRepository, LoadAccountByTokenRepository {
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

  async loadAll (): Promise<Account[]> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const query = new QueryBuilder().build()
    const accounts = await await accountCollection.aggregate<Account>(query).toArray()
    return accounts || []
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

  async loadByToken (token: string, role?: string): Promise<LoadAccountByTokenResponse> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({
      accessToken: token,
      $or: [{
        role
      }, {
        role: 'admin'
      }]
    }, {
      projection: {
        _id: 1
      }
    })
    return account && MongoHelper.map(account)
  }
}
