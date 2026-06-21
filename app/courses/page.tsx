export const revalidate = 3600;
import { prisma } from '@/lib/prisma';
import { CourseCard, Htag, Tag } from '@/components';

export default async function Courses() {
  // remove after testing
  // if (process.env.NODE_ENV === 'development') {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  // }

  const courses = await prisma.course.findMany({
    include: {
      reviews: true,
    },
  });

  return (
    <>
      <Htag tag="h1">All courses</Htag>
      <Tag color="grey" size="m">
        {courses.length}
      </Tag>

      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </>
  );
}
