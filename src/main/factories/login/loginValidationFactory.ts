import ValidationComposite from 'presentation/helpers/validators/ValidationComposite'
import Validation from 'presentation/protocols/Validation'
import RequiredFieldValidation from 'presentation/helpers/validators/RequiredFieldValidation'
import EmailValidation from 'presentation/helpers/validators/EmailValidation'
import EmailValidatorAdapter from 'main/adapters/validators/EmailValidatorAdapter'

export const LoginValidationFactory = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['email', 'password']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}
