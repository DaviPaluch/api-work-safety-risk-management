export class CadastroError extends Error {
  public readonly status: number
  public readonly err: string

}