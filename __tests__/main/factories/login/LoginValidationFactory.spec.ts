import EmailValidator from 'presentation/protocols/EmailValidator'
import { LoginValidationFactory } from 'main/factories/login/loginValidationFactory'
import Validation from 'presentation/protocols/Validation'
import RequiredFieldValidation from 'presentation/helpers/validators/RequiredFieldValidation'
import EmailValidation from 'presentation/helpers/validators/EmailValidation'
import ValidationComposite from 'presentation/helpers/validators/ValidationComposite'

jest.mock('presentation/helpers/validators/ValidationComposite')

const makeEmailValidator = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      return true
    }
  }
  return new EmailValidatorStub()
}

describe('LoginValidation Factory', () => {
  test('Should call ValidationComposite with all validatations', () => {
    LoginValidationFactory()
    const validations: Validation[] = []
    for (const field of ['email', 'password']) {
      validations.push(new RequiredFieldValidation(field))
    }
    validations.push(new EmailValidation('email', makeEmailValidator()))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
