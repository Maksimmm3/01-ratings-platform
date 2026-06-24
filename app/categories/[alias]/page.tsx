export const revalidate = 3600;
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import styles from './page.module.css';
import { CourseCard, Htag, Tag, Sort } from '@/components';

interface Props {
  params: Promise<{ alias: string }>;
  searchParams: Promise<{ sort?: 'rating' | 'price'; dir?: 'asc' | 'desc' }>;
}

export async function generateStaticParams() {
  const categories = await prisma.category.findMany({
    select: { alias: true },
  });

  return categories.map((category) => ({
    alias: category.alias,
  }));
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { alias } = await params;
  const { sort = 'rating', dir = 'desc' } = await searchParams;

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

  const sortedCourses = [...category.courses].sort((a, b) => {
    if (sort === 'rating') {
      const ratingA =
        a.reviews.length > 0
          ? a.reviews.reduce((sum, r) => sum + r.rating, 0) / a.reviews.length
          : 0;
      const ratingB =
        b.reviews.length > 0
          ? b.reviews.reduce((sum, r) => sum + r.rating, 0) / b.reviews.length
          : 0;
      return dir === 'asc' ? ratingA - ratingB : ratingB - ratingA;
    } else {
      const priceA = a.price ?? 0;
      const priceB = b.price ?? 0;
      return dir === 'asc' ? priceA - priceB : priceB - priceA;
    }
  });

  return (
    <main>
      <div className={styles.top}>
        <div className={styles.left}>
          <Htag tag="h1">{category.name}</Htag>
          <Tag color="grey" size="m">
            {category.courses.length}
          </Tag>
        </div>
        <div className={styles.right}>
          <Sort sort={sort} dir={dir} />
        </div>
      </div>

      {sortedCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </main>
  );
}
