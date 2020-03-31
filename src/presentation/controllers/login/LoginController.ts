import { badRequest, serverError, unauthorized, ok } from 'presentation/helpers/http/HttpHelper'
import Controller from 'presentation/protocols/Controller'
import Authentication from 'domain/usecases/Authentication'
import Validation from 'presentation/protocols/Validation'
import HttpRequest from 'presentation/protocols/HttpRequest'
import HttpResponse from 'presentation/protocols/HttpResponse'

export default class LoginController implements Controller {
  constructor (
    private readonly authentication: Authentication,
    private readonly validation: Validation
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { email, password } = httpRequest.body
      const accessToken = await this.authentication.auth({
        email,
        password
      })
      if (!accessToken) {
        return unauthorized()
      }
      return ok({ accessToken })
    } catch (error) {
      return serverError(error)
    }
  }
}
