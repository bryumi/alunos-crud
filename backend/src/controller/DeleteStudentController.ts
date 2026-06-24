import { Request, Response } from 'express';
import { DeleteStudentService } from '../service/DeleteStudentService';

class DeleteStudentController {
  async handle(request: Request, response: Response) {
    const id = request.params.id;
    const deleteStudentService = new DeleteStudentService();
    const msg = await deleteStudentService.execute(id.toString());

    response.json(msg);
  }
}
export { DeleteStudentController };
