// CreateCategoryUseCase.ts

import { classificacao } from "@prisma/client";
import { ClassificacaoRepository } from "../../repositories/implementations/ClassificacaoRepository";

interface IRequest { id: string }

class GetClassificacaoUseCase {

  constructor(private classificacaoRepository: ClassificacaoRepository) { }

  async execute({ id }: IRequest): Promise<classificacao | null> {
    const getById = await this.classificacaoRepository.getById(id);
    return getById
  }
}

export { GetClassificacaoUseCase };
