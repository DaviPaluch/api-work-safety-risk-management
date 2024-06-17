import { Router } from "express";
import { categoriesRoutes } from '../routes/categories.routes'

const router = Router()

router.use("/categories", categoriesRoutes)


export { router }