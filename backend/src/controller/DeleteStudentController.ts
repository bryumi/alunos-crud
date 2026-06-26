import { Request, Response } from 'express';
import { DeleteStudentService } from '../service/DeleteStudentService';

const deleteStudentService = new DeleteStudentService();

export class DeleteStudentController {
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await deleteStudentService.delete(id.toString());

      return res.status(204).send();
    } catch (error) {
      return res.status(404).json({
        message: error instanceof Error ? error.message : 'Error deleting student',
      });
    }
  }
}
