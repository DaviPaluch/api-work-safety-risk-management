// ICategoriesRepository.ts

import { category } from "@prisma/client";

// DTO => Data transfer object
interface ICreateCategoryDTO {
  name: string,
  description: string
}

interface ICategoryRepository {
  findByName(name: string): Promise<category | null>
  list(): Promise<category[]>
  create({ name, description }: ICreateCategoryDTO): Promise<void>
}

export { ICategoryRepository, ICreateCategoryDTO }
