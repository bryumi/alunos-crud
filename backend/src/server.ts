import express, { Request, Response } from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.json());
app.use('/api', routes);

app.get('/api', (req: Request, res: Response) => {
  res.json({
    message: 'API funcionando 🚀',
  });
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} 🚀`);
});
