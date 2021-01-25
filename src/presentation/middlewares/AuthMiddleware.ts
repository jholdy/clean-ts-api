import Middleware from 'presentation/protocols/Middleware'
import HttpResponse from 'presentation/protocols/HttpResponse'
import { ok, serverError, forbidden } from 'presentation/helpers/http/HttpHelper'
import AccessDeniedError from 'presentation/errors/AccessDeniedError'
import AuthMiddlewareParans from 'domain/usecases/AuthMiddlewareParans'
import LoadAccountByTokenInterface from 'domain/usecases/LoadAccountByTokenInterface'

export default class AuthMiddleware implements Middleware {
  constructor (
    private readonly loadAccountByToken: LoadAccountByTokenInterface,
    private readonly role?: string
  ) { }

  async handle (request: AuthMiddlewareParans): Promise<HttpResponse> {
    try {
      const { accessToken } = request
      if (accessToken) {
        const account = await this.loadAccountByToken.load(accessToken, this.role)
        if (account) {
          return ok({ accountId: account.id })
        }
      }
      return forbidden(new AccessDeniedError())
    } catch (error) {
      return serverError(error)
    }
  }
}
