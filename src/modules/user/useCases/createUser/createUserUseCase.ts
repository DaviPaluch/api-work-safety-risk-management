import { inject, injectable } from "tsyringe"
import { ICreateUserDTO, IUserRepository } from '../../repositories/IUserRepository'
import { hash } from "bcrypt"
import { AppError } from "../../../../err/AppError"
import { CadastroError } from "../../../../err/CadastroError"

interface IRequest {
  name: string,
  email: string,
  password_hash: string
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository) { }

  async execute({
    name,
    email,
    password_hash
  }: IRequest): Promise<void> {

    const password_hashed = await hash(password_hash, 8)

    const alreadyExists = await this.userRepository.findByEmail(email)

    if (alreadyExists) {
      throw new CadastroError("Usuário já existe")
    }

    await this.userRepository.create({
      name,
      email,
      password_hash: password_hashed
    })

  }
}

export { CreateUserUseCase }