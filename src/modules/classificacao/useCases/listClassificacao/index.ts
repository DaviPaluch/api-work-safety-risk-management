//createCategori/index.ts

import { ClassificacaoRepository } from "../../repositories/implementations/ClassificacaoRepository"
import { ListClassificacaoController } from "./ListClassificacaoController"
import { ListClassificacaoUseCase } from "./ListClassificacaoUseCase"

const classificacaoRepository = new ClassificacaoRepository
const listClassificacaoUseCase = new ListClassificacaoUseCase(classificacaoRepository)
const listClassificacaoController = new ListClassificacaoController(listClassificacaoUseCase)

export { listClassificacaoController }