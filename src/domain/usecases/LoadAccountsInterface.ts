import Account from 'domain/models/Account'

export default interface LoadAccountsInterface {
  loadAll: () => Promise<Account[]>
}
