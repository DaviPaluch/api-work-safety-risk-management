// CreateCategoryUseCase.ts

import { classificacao } from "@prisma/client";
import { ClassificacaoRepository } from "../../repositories/implementations/ClassificacaoRepository";

interface IRequest { }

class ListClassificacaoUseCase {

  constructor(private classificacaoRepository: ClassificacaoRepository) { }

  async execute({ }: IRequest): Promise<classificacao[] | null> {
    const list = await this.classificacaoRepository.list();
    return list
  }
}

export { ListClassificacaoUseCase };
