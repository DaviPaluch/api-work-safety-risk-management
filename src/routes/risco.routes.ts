// categories.routes.ts
import { Router } from "express";
import { CreateRiscoController } from "../modules/risco/useCases/createRisco/CreateRiscoController";
import { ListRiscoController } from "../modules/risco/useCases/listRisco/ListRiscoController";

const riscoRoutes = Router();
const getRiscoController = new CreateRiscoController()
const listRiscoController = new ListRiscoController()


riscoRoutes.post("/", getRiscoController.handle)
riscoRoutes.get("/list", listRiscoController.handle)



export { riscoRoutes } 