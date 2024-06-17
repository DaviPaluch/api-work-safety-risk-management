// categories.routes.ts
import { Router, Request, Response } from "express";
import { listClassificacaoController } from "../modules/classificacao/useCases/listClassificacao/index";

const classificacaoRoutes = Router();

classificacaoRoutes.post("/", (request: Request, response: Response) => {
  return listClassificacaoController.handle(request, response)
})

export { classificacaoRoutes } 