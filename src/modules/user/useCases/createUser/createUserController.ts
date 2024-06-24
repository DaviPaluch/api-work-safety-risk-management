import { container } from "tsyringe"
import { CreateUserUseCase } from "./createUserUseCase"
import { Request, Response } from "express"
import { stat } from "fs"


class CreateUserCrontroller {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password_hash } = req.body
    try {
      const createUserUseCase = container.resolve(CreateUserUseCase)
      const status = await createUserUseCase.execute({
        name,
        email,
        password_hash
      })

      return res.status(201).send("Salvo com sucesso.").json({status:"200"});
    } catch (err) {
      return res.status(400).json({ status:"400" });
    }
  }
}

export { CreateUserCrontroller }