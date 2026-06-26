import { AppError } from '../errors/appError';
import { prisma } from '../prisma/client';
import { Course } from '@prisma/client';

interface CreateStudentDTO {
  name: string;
  course: Course;
  age: number;
}

export class CreateStudentService {
  async create(data: CreateStudentDTO) {
    if (data.name.trim().length < 1) {
      throw new AppError('O nome do aluno é obrigatório.');
    }
    if (data.course.trim().length < 1) {
      throw new AppError('O curso do aluno é obrigatório.');
    }
    if (data.age === undefined || data.age === null) {
      throw new AppError('A idade do aluno é obrigatória.');
    }
    if (data.age < 16) {
      throw new AppError('O aluno deve ter pelo menos 16 anos.');
    }
    return prisma.student.create({
      data,
    });
  }
}
