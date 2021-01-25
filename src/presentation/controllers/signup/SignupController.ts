import { badRequest, serverError, ok } from 'presentation/helpers/http/HttpHelper'
import Controller from 'presentation/protocols/Controller'
import AddAccountInterface from 'domain/usecases/AddAccountInterface'
import Validation from 'presentation/protocols/Validation'
import HttpRequest from 'presentation/protocols/HttpRequest'
import HttpResponse from 'presentation/protocols/HttpResponse'

export default class SignUpController implements Controller {
  constructor (
    private readonly addAccount: AddAccountInterface,
    private readonly validation: Validation
  ) { }

  /**
   * @swagger
   *
   * /signup:
   *   post:
   *     description: SignUp to the application
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: user
   *         description: User object
   *         in:  body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/AddUser'
   *     responses:
   *       200:
   *         description: OK
   *         schema:
   *          $ref: '#/definitions/ResponseAddUser'
   *       422:
   *         description: MissingParamError | InvalidParamError
   *         schema:
   *          $ref: '#/definitions/ResponseError'
   *       500:
   *         description: ServerError
   *         schema:
   *          $ref: '#/definitions/ResponseError'
   */
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
