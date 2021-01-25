import { serverError, unauthorized, ok, unprocessableEntity } from 'presentation/helpers/http/HttpHelper'
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

  /**
   * @swagger
   *
   * /login:
   *   post:
   *     description: Login to the application
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: user
   *         description: User object
   *         in:  body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/NewUser'
   *     responses:
   *       200:
   *         description: OK
   *         schema:
   *          $ref: '#/definitions/ResponseAuth'
   *       401:
   *         description: UnauthorizedError
   *         schema:
   *          $ref: '#/definitions/ResponseError'
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
        return unprocessableEntity(error)
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
