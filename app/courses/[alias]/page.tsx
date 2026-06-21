export const revalidate = 3600;
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';

interface Props {
  params: Promise<{ alias: string }>;
}

export async function generateStaticParams() {
  const courses = await prisma.course.findMany({
    select: { alias: true },
  });

  return courses.map((course) => ({
    alias: course.alias,
  }));
}

export default async function CoursePage({ params }: Props) {
  // remove after testing
  // if (process.env.NODE_ENV === 'development') {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  // }

  const { alias } = await params;

  const course = await prisma.course.findUnique({
    where: { alias },
  });

  if (!course) {
    notFound();
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
}
