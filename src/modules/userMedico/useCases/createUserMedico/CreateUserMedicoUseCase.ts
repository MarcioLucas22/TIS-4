import { prisma } from "../../../../database/prismaClient"
import { hash } from "bcrypt"

interface IDadosMedico {
  cpf: string
  crm: string
  email: string
  password: string
}

export class CreateUserMedicoUseCase {
  async execute({ cpf, crm, email, password }: IDadosMedico) {
    const userExists = await prisma.medico.findUnique({
      where: {
        cpf: cpf
      }
    })

    if(userExists) {
      throw new Error('Usuário já existe')
    }

    const hashPassword = await hash(password, 10)

    const user = await prisma.medico.create({
      data: {
        cpf,
        crm,
        email,
        password: hashPassword
      }
    })

    return user
  }
}