import "dotenv/config";
import express from "express";
import cors from "cors";
import { errorHandler } from
  "./middlewares/errorHandler";
import taskRoutes from "./routes/taskRoutes";

const app = express(); //app representa servidor HTTP
app.use(cors()); // servidor vai usar CORS
app.use(express.json()); // Servidor vai receber JSON no body
//cria a primeira rota da API, que vai responder à requisição
app.get("/", (req, res) => {
  res.json({ status: "API no ar" });
});
app.use("/task", taskRoutes);
app.use(errorHandler); // middlewares para tratamento de erros
app.listen(3000); //servidor vai escutar requisições na porta
