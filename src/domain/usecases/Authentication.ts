import AuthenticationModel from './AuthenticationModel'

export default interface Authentication {
  auth (authentication: AuthenticationModel): Promise<string>
}
