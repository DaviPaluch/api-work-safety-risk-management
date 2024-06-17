// categories.routes.ts
import { Router, Request, Response } from "express";
import { createCategoryController } from "../modules/cars/useCases/categories/createCategory/index";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request: Request, response: Response) => {
  console.log("panda")
  return createCategoryController.handle(request, response)
})


export { categoriesRoutes } 