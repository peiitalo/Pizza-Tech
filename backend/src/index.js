import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

const PORTA= process.env.PORT || 3000;

app.listen(PORTA,() => {
  console.log(`Servidor está rodando na porta ${PORTA}`);
});