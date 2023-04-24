import { Request, Response } from "express";
import { AuthenticateUserMedicoUseCase } from "./AuthenticateUserMedicoUseCase";


export class AuthenticateUserMedicoController {
  async handle(req: Request, res: Response) {
    const { cpf, password } = req.body

    const authenticateUserMedicoUseCase = new AuthenticateUserMedicoUseCase()

    const result = await authenticateUserMedicoUseCase.execute({
      cpf,
      password
    })

    return res.status(200).send(result)
  }
}