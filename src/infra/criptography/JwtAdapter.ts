import jwt from 'jsonwebtoken'
import Encrypter from 'data/protocols/criptography/Encrypter'

export default class JwtAdapter implements Encrypter {
  constructor (private readonly secret: string) { }

  async encrypt (value: string): Promise<string> {
    const accessToken = await jwt.sign({ id: value }, this.secret)
    return accessToken
  }

  async decrypt (ciphertext: string): Promise<string> {
    return jwt.verify(ciphertext, this.secret) as any
  }
}
