import { container } from "tsyringe";
import { IClassificacaoRepository } from "../../src/modules/classificacao/repositories/IClassificacaoRepository";
import { ClassificacaoRepository } from "../../src/modules/classificacao/repositories/implementations/ClassificacaoRepository";

// CategoriesRepository
container.registerSingleton<IClassificacaoRepository>(
  "ClassificacaoRepository",
  ClassificacaoRepository
);
