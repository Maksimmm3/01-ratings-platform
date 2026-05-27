import { PrismaClient } from '../app/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  // Clear existing data
  await prisma.review.deleteMany();
  await prisma.course.deleteMany();
  await prisma.category.deleteMany();

  // Create categories
  const programming = await prisma.category.create({
    data: {
      name: 'Programming',
      alias: 'programming',
    },
  });

  const design = await prisma.category.create({
    data: {
      name: 'Design',
      alias: 'design',
    },
  });

  // Create courses
  const course1 = await prisma.course.create({
    data: {
      title: 'JavaScript for Beginners',
      alias: 'javascript-beginners',
      description: 'Learn JavaScript from scratch',
      price: 49.99,
      categoryId: programming.id,
    },
  });

  const course2 = await prisma.course.create({
    data: {
      title: 'UI/UX Design Fundamentals',
      alias: 'uiux-fundamentals',
      description: 'Master the basics of UI/UX design',
      price: 59.99,
      categoryId: design.id,
    },
  });

  // Create reviews
  await prisma.review.create({
    data: {
      name: 'John Smith',
      rating: 5,
      text: 'Excellent course, learned a lot!',
      courseId: course1.id,
    },
  });

  await prisma.review.create({
    data: {
      name: 'Emily Johnson',
      rating: 4,
      text: 'Great design course, very practical.',
      courseId: course2.id,
    },
  });

  console.log('Seed completed successfully!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
