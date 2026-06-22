import { CourseCardProps } from './Course.props';
import { price } from '@/helpers/price';

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div
      key={course.id}
      style={{
        border: '1px solid #ccc',
        margin: '10px 0',
        padding: '10px',
      }}
    >
      <h2>{course.title}</h2>
      <p>Price: {price(course.price)}</p>
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
  );
};
