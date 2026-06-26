import { Request, Response } from 'express';
import { UpdateStudentService } from '../service/UpdateStudentService';
import { AppError } from '../errors/appError';

const updateStudentService = new UpdateStudentService();

export class UpdateStudentController {
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const student = await updateStudentService.update(id.toString(), req.body);

      return res.status(200).json(student);
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({
          message: error.message,
        });
      }

      return res.status(500).json({
        message: 'Erro interno do servidor',
      });
    }
  }
}
