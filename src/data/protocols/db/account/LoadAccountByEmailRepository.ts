import AccountModel from "domain/models/Account";

export default interface LoadAccountByEmailRepository {
  loadByEmail (email: string): Promise<AccountModel>
}
