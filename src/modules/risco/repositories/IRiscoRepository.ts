// ICategoriesRepository.ts

import { risco } from "@prisma/client";

// DTO => Data transfer object
interface ICreateRiscoDTO {
  impactoId: string;
  estrategia_resolucaoId: string;
  userId: string;
  titulo: string;
  desc: string;
  setorId: string;
  plano_de_acaoId: string;
}

interface IRiscoRepository {
  // findByName(name: string): Promise<risco | null>
  list(): Promise<risco[]>
  create({
    impactoId,
    estrategia_resolucaoId,
    userId,
    titulo,
    desc,
    setorId,
    plano_de_acaoId, }: ICreateRiscoDTO): Promise<void>
}

export { IRiscoRepository, ICreateRiscoDTO }
