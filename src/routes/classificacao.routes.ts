// categories.routes.ts
import { Router, Request, Response } from "express";
import { listClassificacaoController } from "../modules/classificacao/useCases/listClassificacao/index";
import { getClassificacaoController } from '../modules/classificacao/useCases/get/index'


const classificacaoRoutes = Router();

classificacaoRoutes.get("/", (request: Request, response: Response) => {
  return getClassificacaoController.handle(request, response)
})

classificacaoRoutes.get("/list", (request: Request, response: Response) => {
  return listClassificacaoController.handle(request, response)
})

export { classificacaoRoutes } 