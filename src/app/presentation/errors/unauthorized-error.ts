export class UnauthorizedError extends Error {
  constructor () {
    super('Thare are not have access permission')
  }
}
