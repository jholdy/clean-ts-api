import { makeDbLoadAccountByToken } from 'main/factories/usercase/loadAccountByTokenFactory'
import Middleware from 'presentation/protocols/Middleware'
import AuthMiddleware from 'presentation/middlewares/AuthMiddleware'

export const authMiddlewareFactory = (role?: string): Middleware => {
  return new AuthMiddleware(makeDbLoadAccountByToken(), role)
}
