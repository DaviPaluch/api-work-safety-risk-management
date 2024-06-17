// ICategoriesRepository.ts

import { classificacao } from "@prisma/client";

// DTO => Data transfer object



interface IClassificacaoRepository {
  list(): Promise<classificacao[]>
}

export { IClassificacaoRepository }