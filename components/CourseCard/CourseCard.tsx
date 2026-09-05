import Link from 'next/link';
import { CourseCardProps } from './Course.props';
import { price } from '@/helpers/price';
import { Button } from '@/components';
import styles from './CourseCard.module.css';

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{course.title}</h2>
      <p className={styles.price}>Price: {price(course.price)}</p>
      <p className={styles.description}>{course.description}</p>

      {course.reviews.length > 0 && (
        <div className={styles.reviewPreview}>
          <strong>Review:</strong> {course.reviews[0].text} — ⭐{' '}
          {course.reviews[0].rating}/5
        </div>
      )}

      <div className={styles.actions}>
        <Link href={`/courses/${course.alias}`}>
          <Button appearance="ghost">Details</Button>
        </Link>
        <Link href={`/courses/${course.alias}#reviews`}>
          <Button appearance="ghost">Reviews</Button>
        </Link>
      </div>
    </div>
  );
};
