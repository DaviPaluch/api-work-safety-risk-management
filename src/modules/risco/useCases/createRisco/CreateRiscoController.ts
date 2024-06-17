//CreateCategoryController.ts

import { Request, Response } from "express";
import { CreateRiscoUseCase } from "./CreateRiscoUseCase";

class CreateRiscoController {

  constructor(private createCategoryUseCase: CreateRiscoUseCase) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const {
      impactoId,
      estrategia_resolucaoId,
      userId,
      titulo,
      desc,
      setorId,
      plano_de_acaoId
    } = req.body;

    try {
      await this.createCategoryUseCase.execute({
        impactoId,
        estrategia_resolucaoId,
        userId,
        titulo,
        desc,
        setorId,
        plano_de_acaoId,
      });
      return res.status(201).send("Salvo com sucesso.");
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export { CreateRiscoController };
