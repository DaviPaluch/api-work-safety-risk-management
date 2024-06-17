// CreateCategoryUseCase.ts

import { RiscoRepository } from "../../repositories/implementations/RiscoRepository"

interface IRequest {
  impactoId: string;
  estrategia_resolucaoId: string;
  userId: string;
  titulo: string;
  desc: string;
  setorId: string;
  plano_de_acaoId: string;
}

class CreateRiscoUseCase {

  constructor(private riscoRepository: RiscoRepository) { }

  async execute({
    impactoId,
    estrategia_resolucaoId,
    userId,
    titulo,
    desc,
    setorId,
    plano_de_acaoId
  }: IRequest): Promise<void> {

    await this.riscoRepository.create({
      impactoId,
      estrategia_resolucaoId,
      userId,
      titulo,
      desc,
      setorId,
      plano_de_acaoId
    });
  }
}

export { CreateRiscoUseCase };
