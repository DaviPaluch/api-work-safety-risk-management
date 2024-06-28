// CategoriesRepository.ts

import { PrismaClient, risco } from "@prisma/client";
import { IRiscoRepository, ICreateRiscoDTO } from "../IRiscoRepository";

class RiscoRepository implements IRiscoRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create({
    estrategia_resolucaoId,
    userId,
    setorId,
    status_riscoId,
    classificacaoId,
    titulo,
    desc,
    descImpacto
  }: ICreateRiscoDTO): Promise<void> {
    const impacto = await this.prisma.impacto.create({ data: { desc: descImpacto, classificacaoId: classificacaoId } })
    await this.prisma.risco.create({
      data: {
        impactoId: impacto.id,
        estrategia_resolucaoId: estrategia_resolucaoId,
        userId: userId,
        setorId: setorId,
        status_riscoId: status_riscoId,
        titulo: titulo,
        desc: desc,
      }
    });
  }

  async list(): Promise<any[]> {
    const riscos = await this.prisma.risco.findMany({
      include: {
        impacto: {
          include: {
            classificacao: true
          }
        },
        estrategia_resolucao: true,
        user: true,
        setor: true,
        status_risco: true,
        plano_de_acao: {
          include: {
            status_prazo: true
          }
        }
      }
    });

    return riscos.map(risco => ({
      id: risco.id,
      impacto: {
        id: risco.impacto.id,
        desc: risco.impacto.desc,
        classificacao: {
          id: risco.impacto.classificacao.id,
          label: risco.impacto.classificacao.label
        }
      },
      estrategia_resolucao: {
        id: risco.estrategia_resolucao.id,
        label: risco.estrategia_resolucao.label
      },
      user: {
        id: risco.user.id,
        name: risco.user.name
      },
      setor: {
        id: risco.setor.id,
        label: risco.setor.label
      },
      status_risco: {
        id: risco.status_risco.id,
        label: risco.status_risco.label
      },
      titulo: risco.titulo,
      desc: risco.desc,
      plano_de_acao: risco.plano_de_acao ? {
        id: risco.plano_de_acao.id,
        titulo: risco.plano_de_acao.titulo,
        status_prazo: {
          id: risco.plano_de_acao.status_prazo.id,
          label: risco.plano_de_acao.status_prazo.label
        }
      } : "sem plano de ação"
    }));
  }
}

export { RiscoRepository };
