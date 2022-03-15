// COMANDOS YARN IMPORTANTES
/**
 * yarn init -y
 * yarn add <nome_dependencia> -D (caso for dependência de desenvolvimento)
 * yarn add <nome_dependencia>
 * yarn tsc --init (inicia typescript, gera o arquivo tsconfig.ts)
 * yarn dev
 *
 * BD
 * yarn add typeorm
 * yarn add reflect-metadata
 * yarn add sqlite3
 * yarn add uuid
 * yarn add @types/uuid
 */

// TIPOS DE REQUISIÇÕES
/**
 * GET      => Buscar uma informação
 * POST     => Inserir (Criar) uma informação
 * PUT      => Alterar uma informação
 * DELETE   => Remover um dado
 * PATCH    => Alterar uma informação específica
 */

// TIPOS DE PARÂMETROS
/**
 * Routes Params    => http://localhost:3000/produtos/4234124234 (/4234124234 = parâmetro na URL = exemplo: id)
 * Query Params     => http://localhost:3000/produtos?name=teclado&description=tecladobom (parâmetros não obrigatórios / ?name=teclado&description=tecladobom / ?nomedaprop=valordaprop / & separa os demais parâmetros)
 * Body Params      => dados que vão no corpo da requisição
 *                  {
 *                    "name": "teclado",
 *                    "description": "teclado bom"
 *                  }
 */

import express from "express";
import "reflect-metadata";

// importando o arquivo index da pasta abaixo
import "./database"

// yarn add @types/express
const app = express();

// ROTAS DE TESTE
app.get("/test", (req, res) => {
  return res.send("Olá, rota test GET");
});

app.post("/test-post", (req, res) => {
  return res.send("Olá, rota test POST");
});

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));
