import { expressMiddlewareAdapter } from 'main/adapters/express/expressMiddlewareAdapter'
import { authMiddlewareFactory } from 'main/factories/middlewares/authMiddlewareFactory'

export const auth = expressMiddlewareAdapter(authMiddlewareFactory())
