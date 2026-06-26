import { Course } from '@prisma/client';
import { prisma } from '../prisma/client';
import { AppError } from '../errors/appError';

interface UpdateStudentDTO {
  name?: string;
  course?: Course;
  age?: number;
}

export class UpdateStudentService {
  async update(id: string, data: UpdateStudentDTO) {
    if (data.name && data.name.trim().length < 1) {
      throw new AppError('O nome do aluno é obrigatório.');
    }
    if (data.course && data.course.trim().length < 1) {
      throw new AppError('O curso do aluno é obrigatório.');
    }
    if (data.age && data.age < 16) {
      throw new AppError('O aluno deve ter pelo menos 16 anos.');
    }
    if (!data.name && !data.course && !data.age) {
      throw new AppError('Nenhum dado fornecido para atualização.');
    }
    const student = await prisma.student.findUnique({
      where: {
        id,
      },
    });

    if (!student) {
      throw new AppError('Aluno não encontrado.', 404);
    }

    return await prisma.student.update({
      where: {
        id,
      },
      data,
    });
  }
}
