import LoadAccountsInterface from 'domain/usecases/LoadAccountsInterface'
import { ok, serverError } from 'presentation/helpers/http/HttpHelper'
import Controller from 'presentation/protocols/Controller'
import HttpRequest from 'presentation/protocols/HttpRequest'
import HttpResponse from 'presentation/protocols/HttpResponse'

export default class AccountsController implements Controller {
  constructor (private readonly loadAccounts: LoadAccountsInterface) { }

  /**
   * @swagger
   *
   * /accounts:
   *   get:
   *     description: List all accounts
   *     produces:
   *       - application/json
   *     security:
   *       - bearerAuth: []
   *     responses:
   *       200:
   *         description: OK
   *         schema:
   *          $ref: '#/definitions/ResponseAccounts'
   *       500:
   *         description: ServerError
   *         schema:
   *          $ref: '#/definitions/ResponseError'
   */

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const accounts = (await this.loadAccounts.loadAll()).map(({ _id, name, email }) => ({ id: _id, name, email }))
      return ok({ accounts })
    } catch (error) {
      return serverError(error)
    }
  }
}
