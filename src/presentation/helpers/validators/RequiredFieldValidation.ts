import Validation from 'presentation/protocols/Validation'
import MissingParamError from 'presentation/errors/MissingParamError'

export default class RequiredFieldValidation implements Validation {
  constructor (private readonly fieldName: string) { }

  validate (input: any): Error {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName)
    }
  }
}
