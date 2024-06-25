export class CadastroError {
  public readonly err: string
  public readonly status: number

  constructor(message: string, statusCode = 400) {
    this.status = statusCode
    this.err = message
  }
}