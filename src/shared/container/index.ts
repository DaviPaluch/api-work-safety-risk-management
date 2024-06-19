import { container } from "tsyringe";
import { IClassificacaoRepository } from "../../modules/classificacao/repositories/IClassificacaoRepository";
import { ClassificacaoRepository } from "../../modules/classificacao/repositories/implementations/ClassificacaoRepository";
import { IRiscoRepository } from "../../modules/risco/repositories/IRiscoRepository";
import { RiscoRepository } from "../../modules/risco/repositories/implementations/RiscoRepository";

container.registerSingleton<IClassificacaoRepository>(
  "ClassificacaoRepository",
  ClassificacaoRepository
);
container.registerSingleton<IRiscoRepository>(
  "RiscoRepository",
  RiscoRepository
);