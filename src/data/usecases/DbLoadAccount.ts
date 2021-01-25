import Account from "domain/models/Account";

export default class DbLoadAccount {
  constructor (private readonly loadSurveysRepository: LoadSurveysRepository) { }

  async load (accountId: string): Promise<Account> {
    return this.loadSurveysRepository.loadAll(accountId)
  }
}