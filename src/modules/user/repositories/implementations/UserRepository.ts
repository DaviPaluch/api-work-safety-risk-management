import { PrismaClient } from "@prisma/client";
import { ICreateUserDTO, IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {

  constructor(private prisma: PrismaClient) {
    this.prisma = new PrismaClient();
  }
  create({ name, email, password_hash }: ICreateUserDTO): Promise<void> {
    this.prisma.user.create({
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