export class UnauthorizedError extends Error {
  constructor () {
    super('Não possui permissão para acesso')
  }
}
