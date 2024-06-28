// CategoriesRepository.ts

import { PrismaClient, estrategia_resolucao } from "@prisma/client";
import { IEstrategiaResolucaoRepository } from "../IEstrategiaResolucaoRepository";

class EstrategiaResolucaoRepository implements IEstrategiaResolucaoRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async list(): Promise<estrategia_resolucao[]> {
    const estrategia_resolucao = await this.prisma.estrategia_resolucao.findMany();
    return estrategia_resolucao;
  }
}

export { EstrategiaResolucaoRepository };
