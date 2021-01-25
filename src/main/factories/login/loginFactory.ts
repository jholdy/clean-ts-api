import env from 'main/config/env'
import Controller from 'presentation/protocols/Controller'
import BcryptAdapter from 'infra/criptography/BcryptAdapter'
import JwtAdapter from 'infra/criptography/JwtAdapter'
import AccountMongoRepository from 'infra/db/mongodb/account/AccountMongoRepository'
import DbAuthentication from 'data/usecases/DbAuthentication'
import LoginController from 'presentation/controllers/login/LoginController'
import LogMongoRepository from 'infra/db/mongodb/log/LogMongoRepository'
import LogControllerDecorator from 'main/decorators/LogControllerDecorator'
import { LoginValidationFactory } from './loginValidationFactory'

export const LoginFactory = (): Controller => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const accountMongoRepository = new AccountMongoRepository()
  const dbAuthentication = new DbAuthentication(accountMongoRepository, bcryptAdapter, jwtAdapter, accountMongoRepository)
  const loginController = new LoginController(dbAuthentication, LoginValidationFactory())
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(loginController, logMongoRepository)
}
