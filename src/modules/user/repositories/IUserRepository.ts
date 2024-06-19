interface ICreateUserDTO {
  name: string;
  email: string;
  password_hash: string;
}

interface IUserRepository {
  create(data: ICreateUserDTO): Promise<void>
}

export { ICreateUserDTO, IUserRepository }