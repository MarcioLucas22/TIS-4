import { Request, Response } from "express";
import { CreateUserMedicoUseCase } from "./CreateUserMedicoUseCase";


export class CreateUserMedicoController {
  async handle(req: Request, res: Response) {
    const { cpf, crm, email, password } = req.body

    const createUserMedicoUseCase = new CreateUserMedicoUseCase()

    const result = await createUserMedicoUseCase.execute({
      cpf,
      crm,
      email,
      password
    })

    return res.status(201).send(result)
  }
}