import { hash } from "bcrypt"
import { prisma } from "../../../../database/prismaClient"

interface IDadosMedico {
  id_medico: string
  email?: string
  password: string
}

export class UpdateMedicoUseCase {
  async execute({ id_medico, email, password }: IDadosMedico) {
    const hashPassword = await hash(password, 10)

    const user = prisma.medico.update({
      where: {
        id: id_medico
      },
      data: {
        email,
        password: hashPassword
      }
    })
    return user

  }
}