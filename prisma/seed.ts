import { PrismaClient } from '../app/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  const category = await prisma.category.create({
    data: {
      name: 'Programming',
      alias: 'programming',
    },
  });

  console.log('Created category:', category);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
