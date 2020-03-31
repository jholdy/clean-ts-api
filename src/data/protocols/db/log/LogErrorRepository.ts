export default interface LogErrorRepository {
  logError (stack: string): Promise<void>
}
