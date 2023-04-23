import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";


export class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { cpf, password } = req.body

    const authenticateUserUseCase = new AuthenticateUserUseCase()

    const result = await authenticateUserUseCase.execute({
      cpf,
      password
    })

    return res.status(200).send(result)
  }
}