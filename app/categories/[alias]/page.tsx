export const revalidate = 3600;
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { CourseCard } from '@/components';

interface Props {
  params: Promise<{ alias: string }>;
}

export async function generateStaticParams() {
  const categories = await prisma.category.findMany({
    select: { alias: true },
  });

  return categories.map((category) => ({
    alias: category.alias,
  }));
}

export default async function CategoryPage({ params }: Props) {
  // await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate slow connection
  const { alias } = await params;

  // Test error.tsx - remove after testing
  if (process.env.NODE_ENV === 'development') {
    throw new Error('Test error: Database connection failed');
  }

  const category = await prisma.category.findUnique({
    where: { alias },
    include: {
      courses: {
        include: {
          reviews: true,
        },
      },
    },
  });

  if (!category) {
    notFound();
  }

  return (
    <main>
      <h1>{category.name}</h1>
      <p>Courses: {category.courses.length}</p>

      {category.courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </main>
  );
}
