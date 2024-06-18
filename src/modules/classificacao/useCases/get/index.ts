//createCategori/index.ts

import { ClassificacaoRepository } from "../../repositories/implementations/ClassificacaoRepository"
import { GetClassificacaoController } from "./GetClassificacaoController"
import { GetClassificacaoUseCase } from "./GetClassificacaoUseCase"

const classificacaoRepository = new ClassificacaoRepository
const getClassificacaoUseCase = new GetClassificacaoUseCase(classificacaoRepository)
const getClassificacaoController = new GetClassificacaoController(getClassificacaoUseCase)

export { getClassificacaoController }