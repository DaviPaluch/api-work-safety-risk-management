// CategoriesRepository.ts

import { PrismaClient, classificacao } from "@prisma/client";
import { IClassificacaoRepository } from "../IClassificacaoRepository";

class ClassificacaoRepository implements IClassificacaoRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async list(): Promise<classificacao[]> {
    const classificacao = await this.prisma.classificacao.findMany();
    return classificacao;
  }
}

export { ClassificacaoRepository };
