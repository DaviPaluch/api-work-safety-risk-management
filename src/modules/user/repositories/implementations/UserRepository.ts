import { PrismaClient } from "@prisma/client";
import { ICreateUserDTO, IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  async create({ name, email, password_hash }: ICreateUserDTO): Promise<void> {
    await this.prisma.user.create({
      data: {
        name,
        email,
        password_hash
      }
    })
    return null
  }
}

export { UserRepository }