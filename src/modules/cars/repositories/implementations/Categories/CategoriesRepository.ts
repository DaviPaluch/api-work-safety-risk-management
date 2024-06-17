// CategoriesRepository.ts

import { PrismaClient, category } from "@prisma/client";
import { ICategoryRepository, ICreateCategoryDTO } from "../../ICategoriesRepository";

class CategoriesRepository implements ICategoryRepository {
  private prisma: PrismaClient;

  constructor() { 
    this.prisma = new PrismaClient();
  }

  async create({ description, name }: ICreateCategoryDTO): Promise<void> {
    await this.prisma.category.create({
      data: {
        nome: name,
        desc: description,
      },
    });
  }

  async list(): Promise<category[]> {
    const categories = await this.prisma.category.findMany();
    return categories;
  }

  async findByName(name: string): Promise<category | null> {
    const category = await this.prisma.category.findFirst({
      where: { nome: name }      
    });
    return category;
  }
}

export { CategoriesRepository };
