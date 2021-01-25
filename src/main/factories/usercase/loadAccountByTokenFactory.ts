import env from 'main/config/env'
import DbLoadAccountByToken from 'data/usecases/DbLoadAccountByToken'
import AccountMongoRepository from 'infra/db/mongodb/account/AccountMongoRepository'
import JwtAdapter from 'infra/criptography/JwtAdapter'
import LoadAccountByTokenInterface from 'domain/usecases/LoadAccountByTokenInterface'

export const makeDbLoadAccountByToken = (): LoadAccountByTokenInterface => {
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbLoadAccountByToken(jwtAdapter, accountMongoRepository)
}
