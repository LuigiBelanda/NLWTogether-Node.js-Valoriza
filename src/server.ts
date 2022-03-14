import express from "express";

const app = express();

app.get("/test", (req, res) => {
  return res.send("Olá, rota test GET");
});

app.post("/test-post", (req, res) => {
  return res.send("Olá, rota test POST");
});

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));

// yarn init -y
// yarn add <nome_dependencia> -D (caso for dependência de desenvolvimento)
// yarn add <nome_dependencia>
// yarn tsc --init (inicia typescript, gera o arquivo tsconfig.ts)
// yarn dev