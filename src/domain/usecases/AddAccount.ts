import AddAccountModel from './AddAccountModel'
import AccountModel from 'domain/models/Account'

export default interface AddAccount {
  add: (account: AddAccountModel) => Promise<AccountModel>
}
