import { inject, injectable } from "tsyringe"
import { ICreateUserDTO, IUserRepository } from '../../repositories/IUserRepository'
import { hash } from "bcrypt"
import { AppError } from "../../../../err/AppError"
import { CadastroError } from "../../../../err/CadastroError"

interface IRequest {
  email: string
}

@injectable()
class FindByEmailUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository) { }

  async execute({ email }: IRequest): Promise<boolean> {

    const user = await this.userRepository.findByEmail(email)

    if (user) { return true }

    return false

  }
}

export { FindByEmailUserUseCase }