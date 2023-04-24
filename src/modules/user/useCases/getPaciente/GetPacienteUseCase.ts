import { prisma } from "../../../../database/prismaClient";

export class GetPacienteUseCase {
  async execute(id: string) {
    const paciente = await prisma.paciente.findUnique({
      where: {
        id: id
      }
    })
    
    if(!paciente) {
      throw new Error("Paciente não encontrado")
    }

    return paciente.cpf
  }
}