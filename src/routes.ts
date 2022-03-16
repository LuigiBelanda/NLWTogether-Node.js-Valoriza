import { Router } from "express";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

// ROTAS DE TESTE
router.get("/test", (req, res) => {
  return res.send("Olá, rota test GET");
});

router.post("/test-post", (req, res) => {
  return res.send("Olá, rota test POST");
});

router.post("/users", createUserController.handle);
router.post("/tags", createTagController.handle);

export { router };
