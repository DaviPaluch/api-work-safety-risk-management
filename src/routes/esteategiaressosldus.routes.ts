// categories.routes.ts
import { Router, Request, Response } from "express";
import { ListEstrategiaResolucaoController } from "../modules/estrategiaResolucao/useCases/listClassificacao/ListestrategiaResolucaoController";

const estrategia_resolucaoRoutes = Router();

const listClassificacaoController = new ListEstrategiaResolucaoController()

estrategia_resolucaoRoutes.get("/list", listClassificacaoController.handle)


export { estrategia_resolucaoRoutes } 