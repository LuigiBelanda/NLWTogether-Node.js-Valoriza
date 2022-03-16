import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();

// ROTAS DE TESTE
router.get("/test", (req, res) => {
  return res.send("Olá, rota test GET");
});

router.post("/test-post", (req, res) => {
  return res.send("Olá, rota test POST");
});

router.post("/users", createUserController.handle);

export { router };
