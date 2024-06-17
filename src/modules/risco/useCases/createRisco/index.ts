//createCategori/index.ts

import { RiscoRepository } from "../../repositories/implementations/RiscoRepository";
import { CreateRiscoController } from "../createRisco/CreateRiscoController"
import { CreateRiscoUseCase } from "./CreateRiscoUseCase";

const categoriesRepository = new RiscoRepository
const createCategoryUseCase = new CreateRiscoUseCase(categoriesRepository)
const createCategoryController = new CreateRiscoController(createCategoryUseCase)

export { createCategoryController }