import { ComponentProps } from 'react';
import { Course, Review } from '@/app/generated/prisma/client';

export interface CourseCardProps extends ComponentProps<'div'> {
  course: Course & { reviews: Review[] };
}
