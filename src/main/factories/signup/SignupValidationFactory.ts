import ValidationComposite from 'presentation/helpers/validators/ValidationComposite'
import Validation from 'presentation/protocols/Validation'
import RequiredFieldValidation from 'presentation/helpers/validators/RequiredFieldValidation'
import CompareFieldsValidation from 'presentation/helpers/validators/CompareFieldsValidation'
import EmailValidation from 'presentation/helpers/validators/EmailValidation'
import EmailValidatorAdapter from 'main/adapters/validators/EmailValidatorAdapter'

export const SignupValidationFactory = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}
