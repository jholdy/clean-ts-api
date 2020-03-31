import Controller from 'presentation/protocols/Controller'
import LogErrorRepository from 'data/protocols/db/log/LogErrorRepository'
import HttpResponse from 'presentation/protocols/HttpResponse'
import HttpRequest from 'presentation/protocols/HttpRequest'

export default class LogControllerDecorator implements Controller {
  constructor (
    private readonly controller: Controller,
    private readonly logErrorRepository: LogErrorRepository
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.controller.handle(httpRequest)
    if (httpResponse.statusCode === 500) {
      await this.logErrorRepository.logError(httpResponse.body.stack)
    }
    return httpResponse
  }
}
