import { Router } from 'express'
import { adaptRoute } from '../adapters/express/expressRouteAdapter'
import { signupFactory } from '../factories/signup/signupFactory'
import { LoginFactory } from '../factories/login/loginFactory'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(signupFactory()))
  router.post('/login', adaptRoute(LoginFactory()))
}
