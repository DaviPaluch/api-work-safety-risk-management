import { Router } from "express";
import { categoriesRoutes } from '../routes/categories.routes'
import { classificacaoRoutes } from '../routes/classificacao.routes'

const router = Router()

router.use("/categories", categoriesRoutes)
router.use("/classificacao", classificacaoRoutes)

export { router }