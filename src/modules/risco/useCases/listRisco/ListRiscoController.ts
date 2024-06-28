//CreateCategoryController.ts

import { Request, Response } from "express";
import { ListRiscoUseCase } from "./ListRiscoUseCase";
import { container } from "tsyringe";

class ListRiscoController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const listRiscoUseCase = container.resolve(ListRiscoUseCase)
      const list = await listRiscoUseCase.execute({});
      return res.status(201).json(list);
    } catch (err) {
      console.error({ error: err.message })
      return res.status(400).json("Erro ao retornar a lista de risco");
    }
  }
}

export { ListRiscoController };
