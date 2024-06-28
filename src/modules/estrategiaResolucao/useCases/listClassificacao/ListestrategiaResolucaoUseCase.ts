// CreateCategoryUseCase.ts

import { estrategia_resolucao } from "@prisma/client";
import { IEstrategiaResolucaoRepository } from "../../repositories/IEstrategiaResolucaoRepository";
import { inject, injectable } from "tsyringe";

interface IRequest { }

@injectable()
class ListEstrategiaResolucaoUseCase {

  constructor(
    @inject("EstrategiaResolucaoRepository")
    private estrategiaResolucaoRepository: IEstrategiaResolucaoRepository) { }

  async execute({ }: IRequest): Promise<estrategia_resolucao[] | null> {
    const list = await this.estrategiaResolucaoRepository.list();
    return list
  }
}

export { ListEstrategiaResolucaoUseCase };
