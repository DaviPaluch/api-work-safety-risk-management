import { inject, injectable } from "tsyringe"
import { ICreateUserDTO, IUserRepository } from '../../repositories/IUserRepository'

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
    await this.userRepository.create({
      name,
      email,
      password_hash
    })
  }
}

export { CreateUserUseCase }