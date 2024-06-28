// CreateCategoryUseCase.ts

import { risco } from "@prisma/client";
import { RiscoRepository } from "../../repositories/implementations/RiscoRepository";
import { inject, injectable } from "tsyringe";
import { IRiscoRepository } from "../../repositories/IRiscoRepository";

interface IRequest { }

@injectable()
class ListRiscoUseCase {

  constructor(
    @inject("RiscoRepository")
    private riscoRepository: IRiscoRepository) { }

  async execute({ }: IRequest): Promise<risco[] | null> {
    const risco = await this.riscoRepository.list();
    return risco
  }
}

export { ListRiscoUseCase };
