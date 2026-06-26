import { PrismaClient, Course } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.student.createMany({
    data: [
      {
        name: 'Julia Maria Souza',
        course: Course.SYSTEM_DEVELOPMENT,
        age: 18,
      },
      {
        name: 'João Roberto da Silva',
        course: Course.COMPUTER_SCIENCE,
        age: 20,
      },
      {
        name: 'Maria Fernanda Oliveira',
        course: Course.ACCOUNTING,
        age: 44,
      },
      {
        name: 'Pedro Henrique Costa',
        course: Course.ACCOUNTING_SCIENCE,
        age: 19,
      },
      {
        name: 'Ana Carolina Lima',
        course: Course.PUBLIC_RELATIONS,
        age: 32,
      },
    ],
  });

  console.log('Seed executado com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
