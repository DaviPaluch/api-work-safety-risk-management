// CreateCategoryUseCase.ts

import { classificacao } from "@prisma/client";
import { ClassificacaoRepository } from "../../repositories/implementations/ClassificacaoRepository";
import { inject, injectable } from "tsyringe";
interface IRequest { id: string }

@injectable()
class GetClassificacaoUseCase {

  constructor(
    @inject("ClassificacaoRepository")
    private classificacaoRepository: ClassificacaoRepository) { }

  async execute({ id }: IRequest): Promise<classificacao | null> {
    const getById = await this.classificacaoRepository.getById(id);
    return getById
  }
}

export { GetClassificacaoUseCase };
