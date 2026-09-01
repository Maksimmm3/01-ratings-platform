export const revalidate = 3600;
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { ReviewForm, Rating } from '@/components';

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
    include: {
      reviews: true,
    },
  });

  if (!course) {
    notFound();
  }

  const averageRating =
    course.reviews.length > 0
      ? course.reviews.reduce((sum, r) => sum + r.rating, 0) /
        course.reviews.length
      : 0;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p>Price: {course.price} ₽</p>
      <div>
        Rating: <Rating rating={Math.round(averageRating)} /> (
        {course.reviews.length} reviews)
      </div>

      <h2 id="reviews">Reviews ({course.reviews.length})</h2>
      {course.reviews.length > 0 ? (
        course.reviews.map((review) => (
          <div
            key={review.id}
            style={{
              border: '1px solid #eee',
              padding: '12px',
              marginBottom: '8px',
            }}
          >
            <strong>{review.name}</strong> — <Rating rating={review.rating} />
            <p>{review.text}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet. Be the first!</p>
      )}

      <ReviewForm courseId={course.id} />
    </div>
  );
}
