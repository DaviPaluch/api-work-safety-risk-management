import { container } from "tsyringe"
import { CreateUserUseCase } from "./createUserUseCase"
import { Request, Response } from "express"


class CreateUserCrontroller {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password_hash } = req.body
    try {
      const createUserUseCase = container.resolve(CreateUserUseCase)
      await createUserUseCase.execute({
        name,
        email,
        password_hash
      })

      return res.status(201).send("Salvo com sucesso.");
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export { CreateUserCrontroller }