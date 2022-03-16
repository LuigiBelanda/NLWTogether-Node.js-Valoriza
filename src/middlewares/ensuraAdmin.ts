import { Request, Response, NextFunction } from "express";

export function ensureAdmin(req: Request, res: Response, next: NextFunction) {
  // verificar se o user é admin
  const admin = true;

  // se for admin vamos para a próxima função
  if (admin) {
    return next();
  }

  return res.status(401).json({
    error: "Unauthorized",
  });
}
