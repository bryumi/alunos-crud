import { Course } from '@prisma/client';
import { prisma } from '../prisma/client';

interface UpdateStudentDTO {
  name?: string;
  course?: Course;
  age?: number;
}

export class UpdateStudentService {
  async update(id: string, data: UpdateStudentDTO) {
    const student = await prisma.student.findUnique({
      where: {
        id,
      },
    });

    if (!student) {
      throw new Error('Student not found');
    }

    return await prisma.student.update({
      where: {
        id,
      },
      data,
    });
  }
}
