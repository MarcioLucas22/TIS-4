import { compare } from "bcrypt"
import { prisma } from "../../../../database/prismaClient"
import { sign } from "jsonwebtoken"

interface IAuthenticateUserMedico {
  cpf: string
  password: string
}

export class AuthenticateUserMedicoUseCase {
  async execute({ cpf, password }: IAuthenticateUserMedico) {
    const user = await prisma.medico.findFirst({
      where: {
        cpf: cpf
      }
    })

    if(!user) {
      throw new Error("CPF ou senha inválida")
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch) {
      throw new Error("CPF ou senha inválida")
    }

    const token = sign({cpf}, "6de1c4c6ae4a49e7590d3bd4449d41d6", {
      subject: user.id,
      expiresIn: '1d'
    })

    return token
  }
}