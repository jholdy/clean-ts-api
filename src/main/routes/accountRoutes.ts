import { Router } from 'express'
import { adaptRoute } from '../adapters/express/expressRouteAdapter'
import { signupFactory } from '../factories/signup/signupFactory'
import { LoginFactory } from '../factories/login/loginFactory'
import { accountsFactory } from 'main/factories/accounts/accountsFactory'
import { auth } from 'main/middlewares/auth'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(signupFactory()))
  router.post('/login', adaptRoute(LoginFactory()))
  router.get('/accounts', auth, adaptRoute(accountsFactory()))
}
