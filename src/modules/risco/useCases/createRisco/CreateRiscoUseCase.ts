// CreateCategoryUseCase.ts

import { inject, injectable } from "tsyringe";
import { RiscoRepository } from "../../repositories/implementations/RiscoRepository"

interface IRequest {
  estrategia_resolucaoId: string;
  userId: string;
  setorId: string;
  status_riscoId: string;
  classificacaoId: string;
  titulo: string;
  desc: string;
  descImpacto: string
}


@injectable()
class CreateRiscoUseCase {

  constructor(
    @inject("RiscoRepository")
    private riscoRepository: RiscoRepository) { }

  async execute({
    estrategia_resolucaoId,
    userId,
    setorId,
    status_riscoId,
    classificacaoId,
    titulo,
    desc,
    descImpacto
  }: IRequest): Promise<void> {
    await this.riscoRepository.create({
      estrategia_resolucaoId,
      userId,
      setorId,
      status_riscoId,
      classificacaoId,
      titulo,
      desc,
      descImpacto
    });
  }
}

export { CreateRiscoUseCase };
