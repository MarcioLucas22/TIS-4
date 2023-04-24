import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string
}

export async function ensureAuthenticateMedico(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization

  if(!authHeader) {
    return res.status(401).json({
      message: "Está faltando Token de autenticação"
    })
  }

  const [, token] = authHeader.split(" ")

  try {
    const { sub } = verify(token, "6de1c4c6ae4a49e7590d3bd4449d41d6") as IPayload

    req.id_medico = sub

    return next()
  } catch(erro) {
    return res.status(401).json({
      message: "Token inválido"
    })
  }
}