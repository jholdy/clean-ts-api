import HttpResponse from 'presentation/protocols/HttpResponse'

export default interface Middleware<T = any> {
  handle: (httpRequest: T) => Promise<HttpResponse>
}
