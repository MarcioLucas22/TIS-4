import { prisma } from "../../../../database/prismaClient"
import { hash } from "bcrypt"

interface ICreateUser {
  cpf: string
  password: string
}

export class CreateUserUseCase {
  async execute({ cpf, password }: ICreateUser) {

    const userExists = await prisma.paciente.findUnique({
      where: {
        cpf: cpf
      }
    })

    if(userExists) {
      throw new Error('Usuário já existe')
    }

    const hashPassword = await hash(password, 10)

    const user = await prisma.paciente.create({
      data: {
        cpf,
        password: hashPassword
      }
    })

    return user
  }
}