import HttpRequest from './HttpRequest'
import HttpResponse from './HttpResponse'

export default interface Controller {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}
