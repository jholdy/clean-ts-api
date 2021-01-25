import Account from "domain/models/Account";
import AddAccountParans from "domain/usecases/AddAccountParans";

export default interface AddAccountRepository {
  add (accountData: AddAccountParans): Promise<Account>
}
