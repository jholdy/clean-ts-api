import AddAccountParans from './AddAccountParans'
import Account from 'domain/models/Account'

export default interface AddAccountInterface {
  add: (account: AddAccountParans) => Promise<Account>
}
