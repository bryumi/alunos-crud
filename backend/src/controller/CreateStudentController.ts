import { Request, Response } from 'express';
import { CreateStudentService } from '../service/CreateStudentService';

const createStudentService = new CreateStudentService();

export class CreateStudentController {
  async create(req: Request, res: Response) {
    try {
      const student = await createStudentService.create(req.body);

      return res.status(201).json(student);
    } catch (error) {
      return res.status(400).json({
        message: 'Error creating student',
      });
    }
  }
}
