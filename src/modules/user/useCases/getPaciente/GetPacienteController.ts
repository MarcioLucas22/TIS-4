import { Request, Response } from "express";
import { GetPacienteUseCase } from "./GetPacienteUseCase";


export class GetPacienteController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    const getPacienteUseCase = new GetPacienteUseCase()

    const result = await getPacienteUseCase.execute(id)

    return res.status(200).send(result)
  }
}