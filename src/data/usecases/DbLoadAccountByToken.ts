import Decrypter from 'data/protocols/criptography/Decrypter'
import LoadAccountByTokenRepository from 'data/protocols/db/account/LoadAccountByTokenRepository'
import LoadAccountByTokenInterface from 'domain/usecases/LoadAccountByTokenInterface'
import LoadAccountByTokenResponse from 'domain/usecases/LoadAccountByTokenResponse'

export default class DbLoadAccountByToken implements LoadAccountByTokenInterface {
  constructor (
    private readonly decrypter: Decrypter,
    private readonly loadAccountByTokenRepository: LoadAccountByTokenRepository
  ) { }

  async load (accessToken: string, role?: string): Promise<LoadAccountByTokenResponse> {
    let token: string
    try {
      token = await this.decrypter.decrypt(accessToken)
    } catch (error) {
      return null
    }
    if (token) {
      const account = await this.loadAccountByTokenRepository.loadByToken(accessToken, role)
      if (account) {
        return account
      }
    }
    return null
  }
}