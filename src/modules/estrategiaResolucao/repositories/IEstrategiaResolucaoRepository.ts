// ICategoriesRepository.ts

import { estrategia_resolucao } from "@prisma/client";

// DTO => Data transfer object



interface IEstrategiaResolucaoRepository {
  list(): Promise<estrategia_resolucao[]>
}

export { IEstrategiaResolucaoRepository }