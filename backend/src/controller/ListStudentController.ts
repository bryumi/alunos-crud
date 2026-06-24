import { Request, Response } from 'express';
import { ListStudentService } from '../service/ListStudentService';

export class ListStudentController {
  async handle(request: Request, response: Response) {
    const listStudentService = new ListStudentService();
    const students = await listStudentService.execute();
    response.json(students);
  }
}
