import { Request, Response } from 'express';
import { UpdateStudentService } from '../service/UpdateStudentService';

const updateStudentService = new UpdateStudentService();

export class UpdateStudentController {
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const student = await updateStudentService.update(id.toString(), req.body);

      return res.status(200).json(student);
    } catch (error) {
      return res.status(404).json({
        message: error instanceof Error ? error.message : 'Error updating student',
      });
    }
  }
}
