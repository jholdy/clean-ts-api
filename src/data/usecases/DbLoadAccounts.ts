import LoadAccountsRepository from "data/protocols/db/account/LoadAccountsRepository";
import Account from "domain/models/Account";

export default class DbLoadAccounts {
  constructor (private readonly LoadAccountsRepository: LoadAccountsRepository) { }

  async load (): Promise<Account[]> {
    return this.LoadAccountsRepository.loadAll()
  }
}