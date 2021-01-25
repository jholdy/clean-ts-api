export default interface Decrypter {
  decrypt: (ciphertext: string) => Promise<string>
}
