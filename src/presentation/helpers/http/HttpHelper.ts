import HttpResponse from 'presentation/protocols/HttpResponse'
import UnauthorizedError from 'presentation/errors/UnauthorizedError'
import ServerError from 'presentation/errors/ServerError'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const unprocessableEntity = (error: Error): HttpResponse => ({
  statusCode: 422,
  body: error
})

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError()
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack)
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})
