export const revalidate = 3600;
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';

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
  const { alias } = await params;

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
        <div
          key={course.id}
          style={{
            border: '1px solid #ccc',
            margin: '10px 0',
            padding: '10px',
          }}
        >
          <h2>{course.title}</h2>
          <p>Price: {course.price} $</p>
          <p>{course.description}</p>

          {course.reviews.length > 0 && (
            <div>
              <strong>Review:</strong> {course.reviews[0].text} — ⭐{' '}
              {course.reviews[0].rating}/5
            </div>
          )}

          <button>Details</button>
          <button>Reviews</button>
        </div>
      ))}
    </main>
  );
}
