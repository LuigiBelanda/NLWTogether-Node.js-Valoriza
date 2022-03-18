import { Request, Response, NextFunction } from "express";

export function ensureAdmin(req: Request, res: Response, next: NextFunction) {
  const { user_id } = req;
  console.log("\nUSER ID (ensureAdmin):", user_id);

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
