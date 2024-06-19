import { container } from "tsyringe"
import { CreateUserUseCase } from "./createUserUseCase"
import { Request, Response } from "express"


class CreateUserCrontroller {
  async handle(req: Request, res: Response): Promise<void> {
    const { name, email, password_hash } = req.body
    const createUserUseCase = container.resolve(CreateUserUseCase)
    await createUserUseCase.execute({
      name,
      email,
      password_hash
    })
  }
}

export { CreateUserCrontroller }