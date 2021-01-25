import AccountMongoRepository from 'infra/db/mongodb/account/AccountMongoRepository'
import AccountsController from 'presentation/controllers/accounts/AccountsController'
import Controller from 'presentation/protocols/Controller'

export const accountsFactory = (): Controller => {
  const accountMongoRepository = new AccountMongoRepository()
  return new AccountsController(accountMongoRepository)
}
