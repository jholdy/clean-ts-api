import LoadAccountByTokenResponse from "domain/usecases/LoadAccountByTokenResponse";

export default interface LoadAccountByTokenRepository {
  loadByToken: (token: string, role?: string) => Promise<LoadAccountByTokenResponse>
}