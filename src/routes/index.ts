import { Router } from "express";
import { classificacaoRoutes } from '../routes/classificacao.routes'
import { riscoRoutes } from "./risco.routes";
import { userRoutes } from "./user.routes";
import { authRoutes } from "./authenticate.routes";
import { setorRoutes } from "./setor.routes";

const router = Router()

router.use("/risco", riscoRoutes)
router.use("/setor", setorRoutes)
router.use("/classificacao", classificacaoRoutes)
router.use("/user", userRoutes)
router.use("/auth", authRoutes)

export { router }