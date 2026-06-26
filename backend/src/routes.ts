import { Router } from 'express';
import { CreateStudentController } from './controller/CreateStudentController';
import { UpdateStudentController } from './controller/UpdateStudentController';
import { ListStudentController } from './controller/ListStudentController';
import { DeleteStudentController } from './controller/DeleteStudentController';

const router = Router();
const createStudentController = new CreateStudentController();
const updateStudentController = new UpdateStudentController();
const listStudentController = new ListStudentController();
const deleteStudentController = new DeleteStudentController();

router.get('/alunos', (req, res) => listStudentController.findAll(req, res));

router.get('/alunos/:id', (req, res) => listStudentController.findById(req, res));

router.post('/alunos', (req, res) => createStudentController.create(req, res));

router.put('/alunos/:id', (req, res) => updateStudentController.update(req, res));

router.delete('/alunos/:id', (req, res) => deleteStudentController.delete(req, res));

export default router;
