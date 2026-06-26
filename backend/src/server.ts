import express, { Request, Response } from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'API funcionando 🚀',
  });
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} 🚀`);
});
