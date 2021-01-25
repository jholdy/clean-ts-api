import Hasher from "data/protocols/criptography/Hasher"
import AddAccountRepository from "data/protocols/db/account/AddAccountRepository"
import AddAccountInterface from "domain/usecases/AddAccountInterface"
import Account from "domain/models/Account"
import AddAccountParans from "domain/usecases/AddAccountParans"

export default class DbAddAccount implements AddAccountInterface {
  constructor (
    private readonly hasher: Hasher,
    private readonly addAccountRepository: AddAccountRepository
  ) { }

  async add (accountData: AddAccountParans): Promise<Account> {
    const hashedPassword = await this.hasher.hash(accountData.password)
    const account = await this.addAccountRepository.add(Object.assign({}, accountData, { password: hashedPassword }))
    return account
  }
}
