import { badRequest, serverError, ok } from 'presentation/helpers/http/HttpHelper'
import Controller from 'presentation/protocols/Controller'
import AddAccount from 'domain/usecases/AddAccount'
import Validation from 'presentation/protocols/Validation'
import HttpRequest from 'presentation/protocols/HttpRequest'
import HttpResponse from 'presentation/protocols/HttpResponse'

export default class SignUpController implements Controller {
  constructor (
    private readonly addAccount: AddAccount,
    private readonly validation: Validation
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { name, email, password } = httpRequest.body
      const account = await this.addAccount.add({
        name,
        email,
        password
      })
      return ok(account)
    } catch (error) {
      return serverError(error)
    }
  }
}
