//CreateCategoryController.ts

import { Request, Response } from "express";
import { ListClassificacaoUseCase } from "./ListClassificacaoUseCase";

class ListClassificacaoController {

  constructor(private listClassificacaoUseCase: ListClassificacaoUseCase) { }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const list = await this.listClassificacaoUseCase.execute({});
      return res.status(201).json(list);
    } catch (err) {
      console.error({ error: err.message })
      return res.status(400).json("Erro ao retornar a lista de classificações");
    }
  }
}

export { ListClassificacaoController };
