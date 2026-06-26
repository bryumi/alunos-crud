import { Request, Response } from 'express';
import { ListStudentService } from '../service/ListStudentService';

const listStudentService = new ListStudentService();

export class ListStudentController {
  async findAll(req: Request, res: Response) {
    try {
      const students = await listStudentService.findAll();

      return res.status(200).json(students);
    } catch (error) {
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const student = await listStudentService.findById(id.toString());

      if (!student) {
        return res.status(404).json({
          message: 'Student not found',
        });
      }

      return res.status(200).json(student);
    } catch (error) {
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }
}
