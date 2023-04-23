import { prisma } from "../../../../database/prismaClient"

interface DatasUser {
  nome: string
  conhecidoComo: string
  nomeCompanheiro: string
  dataNascimento: string
  idade: number
  raca: string
  trabalhaEmCasa: boolean
  ocupacao: string
  cep: string
  endereco: string
  cidade: string
  estado: string
  telefoneFixo: string
  telefoneCelular: string
  email: string
}

export class RegisterPersonalDataUseCase {
  async execute(datas :DatasUser) {
    const personalDatas = await prisma.dadosPessoais.create({
      data: {
        nome: datas.nome,
        conhecidoComo: datas.conhecidoComo,
        nomeCompanheiro: datas.nomeCompanheiro,
        dataNascimento: datas.dataNascimento,
        idade: datas.idade,
        raca: datas.raca,
        trabalhaEmCasa: false,
        ocupacao: datas.ocupacao,
        cep: datas.cep,
        endereco: datas.endereco,
        cidade: datas.cidade,
        estado: datas.estado,
        telefoneFixo: datas.telefoneFixo,
        telefoneCelular: datas.telefoneCelular,
        email: datas.email
      }
    })

    return personalDatas
  }
}