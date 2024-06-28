//CreateCategoryController.ts

import { Request, Response } from "express";
import { ListEstrategiaResolucaoUseCase } from "./ListestrategiaResolucaoUseCase";
import { container } from "tsyringe";

class ListEstrategiaResolucaoController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const listEstrategiaResolucaoUseCase = container.resolve(ListEstrategiaResolucaoUseCase)
      const list = await listEstrategiaResolucaoUseCase.execute({});
      return res.status(201).json(list);
    } catch (err) {
      console.error({ error: err.message })
      return res.status(400).json("Erro ao retornar a lista de estrategias");
    }
  }
}

export { ListEstrategiaResolucaoController };
