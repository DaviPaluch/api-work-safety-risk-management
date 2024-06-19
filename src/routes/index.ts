import { Router } from "express";
import { classificacaoRoutes } from '../routes/classificacao.routes'
import { riscoRoutes } from "./risco.routes";
import { userRoutes } from "./user.routes";

const router = Router()

router.use("/risco", riscoRoutes)
router.use("/classificacao", classificacaoRoutes)
router.use("/user", userRoutes)

export { router }