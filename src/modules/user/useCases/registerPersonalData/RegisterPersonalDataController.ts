import { Request, Response } from "express";
import { RegisterPersonalDataUseCase } from "./RegisterPersonalDataUseCase";


export class RegisterPersonalDataController {
  async handle(req: Request, res: Response) {
    const { nome, 
      conhecidoComo,
      nomeCompanheiro,
      dataNascimento,
      idade,
      raca,
      trabalhaEmCasa,
      ocupacao,
      cep,
      endereco,
      cidade,
      estado,
      telefoneFixo,
      telefoneCelular,
      email } = req.body

      const registerPersonalDataUseCase = new RegisterPersonalDataUseCase()

      const result = registerPersonalDataUseCase.execute({
        nome,
        conhecidoComo,
        nomeCompanheiro,
        dataNascimento,
        idade,
        raca,
        trabalhaEmCasa,
        ocupacao,
        cep,
        endereco,
        cidade,
        estado,
        telefoneFixo,
        telefoneCelular,
        email
      })

      return res.status(201).send(result)
  }
}