// CategoriesRepository.ts

import { PrismaClient, risco } from "@prisma/client";
import { IRiscoRepository, ICreateRiscoDTO } from "../IRiscoRepository";

class RiscoRepository implements IRiscoRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create({
    impactoId,
    estrategia_resolucaoId,
    userId,
    titulo,
    desc,
    setorId,
    plano_de_acaoId,
  }: ICreateRiscoDTO): Promise<void> {
    await this.prisma.risco.create({
      data: {
        impactoId: impactoId,
        estrategia_resolucaoId: estrategia_resolucaoId,
        userId: userId,
        titulo: titulo,
        desc: desc,
        setorId: setorId,
        plano_de_acaoId: plano_de_acaoId,
        status_riscoId: "adicionar nas dtos de request"
      }
    });
  }

  async list(): Promise<risco[]> {
    const categories = await this.prisma.risco.findMany();
    return categories;
  }

  // async findByName(name: string): Promise<risco | null> {
  //   const category = await this.prisma.risco.findFirst({
  //     where: { nome: name }
  //   });
  //   return category;
  // }
}

export { RiscoRepository };
