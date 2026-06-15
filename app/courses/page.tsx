export const revalidate = 3600;
import { prisma } from '@/lib/prisma';
import { CourseCard } from '@/components';

export default async function Courses() {
  // remove after testing
  if (process.env.NODE_ENV === 'development') {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  const courses = await prisma.course.findMany({
    include: {
      reviews: true,
    },
  });

  return (
    <>
      <h1>All courses</h1>
      <p>Courses: {courses.length}</p>

      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </>
  );
}
