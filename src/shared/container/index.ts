import { container } from "tsyringe";
import { IClassificacaoRepository } from "../../modules/classificacao/repositories/IClassificacaoRepository";
import { ClassificacaoRepository } from "../../modules/classificacao/repositories/implementations/ClassificacaoRepository";
import { IRiscoRepository } from "../../modules/risco/repositories/IRiscoRepository";
import { RiscoRepository } from "../../modules/risco/repositories/implementations/RiscoRepository";
import { IUserRepository } from "../../modules/user/repositories/IUserRepository";
import { UserRepository } from "../../modules/user/repositories/implementations/UserRepository";
import { INotificacaoRepository } from "../../modules/notificacao/repositories/INotificacaoRepository";
import { NotificacaoRepository } from "../../modules/notificacao/repositories/implementations/NotificacaoRepository";

container.registerSingleton<IClassificacaoRepository>(
  "ClassificacaoRepository",
  ClassificacaoRepository
);
container.registerSingleton<IRiscoRepository>(
  "RiscoRepository",
  RiscoRepository
);
container.registerSingleton<IUserRepository>(
  "UserRepository",
  UserRepository
);
container.registerSingleton<INotificacaoRepository>(
  "NotificacaoRepository",
  NotificacaoRepository
);