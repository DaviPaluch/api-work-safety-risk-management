import { inject, injectable } from "tsyringe"
import { ICreateUserDTO, IUserRepository } from '../../repositories/IUserRepository'

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository) { }

  async execute({
    name,
    email,
    password_hash
  }: ICreateUserDTO): Promise<void> {
    await this.userRepository.create({
      name,
      email,
      password_hash
    })
  }
}

export { CreateUserUseCase }