import { Request, Response } from 'express';
import { CreateStudentService } from '../service/CreateStudentService';
import { AppError } from '../errors/appError';

const createStudentService = new CreateStudentService();

export class CreateStudentController {
  async create(req: Request, res: Response) {
    try {
      const student = await createStudentService.create(req.body);

      return res.status(201).json(student);
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
