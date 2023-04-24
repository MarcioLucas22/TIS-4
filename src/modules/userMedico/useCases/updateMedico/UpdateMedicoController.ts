import { Request, Response } from "express";
import { UpdateMedicoUseCase } from "./UpdateMedicoUseCase";

export class UpdateMedicoController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body
    const { id_medico } = req

    const updateMedicoUseCase = new UpdateMedicoUseCase()

    const result = await updateMedicoUseCase.execute({
      id_medico,
      email,
      password
    })

    return res.status(200).send(result)
  }
}