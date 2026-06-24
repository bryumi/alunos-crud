import { Request, Response } from 'express';
import { CreateStudentService } from '../service/CreateStudentService';

class CreateStudentController {
  async handle(request: Request, response: Response) {
    const { name, tel, email, endereco, bairro, cidade, uf } = request.body;
    const createStudentService = new CreateStudentService();
    const student = await createStudentService.execute({
      name,
      tel,
      email,
      endereco,
      bairro,
      cidade,
      uf,
    });
    response.json({ message: 'Aluno cadastrado!' });
  }
}
export { CreateStudentController };
