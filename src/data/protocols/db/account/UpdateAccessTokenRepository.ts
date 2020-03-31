export default interface UpdateAccessTokenRepository {
  updateAccessToken (id: string, token: string): Promise<void>
}
