import { prisma } from '../prisma/client';
import { Course } from '@prisma/client';

interface CreateStudentDTO {
  name: string;
  course: Course;
  age: number;
}

export class CreateStudentService {
  async create(data: CreateStudentDTO) {
    return prisma.student.create({
      data,
    });
  }
}
