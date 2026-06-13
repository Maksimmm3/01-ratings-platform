import { Suspense } from 'react';
import { prisma } from '@/lib/prisma';
import { SearchInput, CourseCard } from '@/components';

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;

  // remove after testing
  // if (process.env.NODE_ENV === 'development') {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  // }

  const message = q ? `No courses found for "${q}"` : 'Enter a search query';

  const courses = q
    ? await prisma.course.findMany({
        where: {
          title: {
            contains: q,
            mode: 'insensitive',
          },
        },
        include: {
          reviews: true,
        },
      })
    : [];

  return (
    <div>
      <Suspense fallback={<div>Loading search...</div>}>
        <SearchInput />
      </Suspense>
      {courses.length > 0 ? (
        <h1>Found {courses.length} courses</h1>
      ) : (
        <h1>{message}</h1>
      )}
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
