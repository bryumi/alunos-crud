import { prisma } from '../prisma/client';

export class DeleteStudentService {
  async delete(id: string) {
    const student = await prisma.student.findUnique({
      where: {
        id,
      },
    });

    if (!student) {
      throw new Error('Student not found');
    }

    await prisma.student.delete({
      where: {
        id,
      },
    });
  }
}
