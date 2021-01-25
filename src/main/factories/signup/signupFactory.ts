import Controller from 'presentation/protocols/Controller'
import BcryptAdapter from 'infra/criptography/BcryptAdapter'
import AccountMongoRepository from 'infra/db/mongodb/account/AccountMongoRepository'
import DbAddAccount from 'data/usecases/DbAddAccount'
import SignUpController from 'presentation/controllers/signup/SignupController'
import LogMongoRepository from 'infra/db/mongodb/log/LogMongoRepository'
import LogControllerDecorator from 'main/decorators/LogControllerDecorator'
import { SignupValidationFactory } from './SignupValidationFactory'

export const signupFactory = (): Controller => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  const dbAddAccount = new DbAddAccount(bcryptAdapter, accountMongoRepository)
  const signUpController = new SignUpController(dbAddAccount, SignupValidationFactory())
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(signUpController, logMongoRepository)
}
