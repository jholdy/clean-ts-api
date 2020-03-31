import AddAccountModel from "domain/usecases/AddAccountModel";
import AccountModel from "domain/models/Account";

export default interface AddAccountRepository {
  add (accountData: AddAccountModel): Promise<AccountModel>
}
