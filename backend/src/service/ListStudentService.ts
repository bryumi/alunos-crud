import { prisma } from '../prisma/client';

export class ListStudentService {
  async findAll() {
    return await prisma.student.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }

  async findById(id: string) {
    return await prisma.student.findUnique({
      where: {
        id,
      },
    });
  }
}
