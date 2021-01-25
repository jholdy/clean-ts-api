import LoadAccountByTokenResponse from './LoadAccountByTokenResponse'

export default interface LoadAccountByTokenInterface {
  load: (accessToken: string, role?: string) => Promise<LoadAccountByTokenResponse>
}
