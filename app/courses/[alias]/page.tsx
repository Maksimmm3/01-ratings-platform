export const revalidate = 3600;
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { ReviewForm, Rating } from '@/components';
import styles from './page.module.css';

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
    <div className={styles.container}>
      <h1 className={styles.title}>{course.title}</h1>
      <p className={styles.description}>{course.description}</p>
      <p className={styles.price}>Price: {course.price} $</p>

      <div className={styles.ratingWrapper}>
        <span className={styles.ratingLabel}>Rating:</span>
        <Rating rating={Math.round(averageRating)} />
        <span className={styles.ratingValue}>{averageRating.toFixed(1)}</span>
        <span className={styles.reviewCount}>
          ({course.reviews.length} reviews)
        </span>
      </div>

      <h2 id="reviews" className={styles.reviewsTitle}>
        Reviews ({course.reviews.length})
      </h2>

      {course.reviews.length > 0 ? (
        course.reviews.map((review) => (
          <div key={review.id} className={styles.review}>
            <div className={styles.reviewHeader}>
              <strong className={styles.reviewName}>{review.name}</strong>
              <Rating rating={review.rating} />
            </div>
            <p className={styles.reviewText}>{review.text}</p>
          </div>
        ))
      ) : (
        <p className={styles.noReviews}>No reviews yet. Be the first!</p>
      )}

      <ReviewForm courseId={course.id} />
    </div>
  );
}
