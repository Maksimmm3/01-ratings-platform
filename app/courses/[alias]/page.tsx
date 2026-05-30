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
