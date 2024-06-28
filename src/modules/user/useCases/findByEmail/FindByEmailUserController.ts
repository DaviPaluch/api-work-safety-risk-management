import { container } from "tsyringe"
import { FindByEmailUserUseCase } from "./FindByEmailUserUseCase"
import { Request, Response } from "express"



class FindByEmailUserCrontroller {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email } = req.query
    try {
      const findByEmailUserUseCase = container.resolve(FindByEmailUserUseCase)
      const exist = await findByEmailUserUseCase.execute({ email: String(email) })
      return res.status(201).json({ status: "200", emailCadastrado: exist });
    } catch (err) {
      return res.status(401).send(err.message);
    }
  }
}

export { FindByEmailUserCrontroller }