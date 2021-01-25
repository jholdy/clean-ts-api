import Account from "domain/models/Account";

export default interface LoadAccountsRepository {
  loadAll: () => Promise<Account[]>
}