import { Request, Response } from 'express';
import { UpdateStudentService } from '../service/UpdateStudentService';

class UpdateStudentController {
  async handle(request: Request, response: Response) {
    const { name, tel, email, endereco, bairro, cidade, uf } = request.body;
    const id = request.params.id;
    const updateStudentService = new UpdateStudentService();
    if (!id || typeof id !== 'string') {
      return response.status(400).json({ message: 'ID do aluno não informado' });
    }
    const student = await updateStudentService.execute({
      id,
      name,
      tel,
      email,
      endereco,
      bairro,
      cidade,
      uf,
    });
    response.json({ message: `Aluno ${id} atualizado` });
  }
}
export { UpdateStudentController };
