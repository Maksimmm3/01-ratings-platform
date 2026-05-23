import { ComponentProps } from 'react';

export interface RatingProps extends ComponentProps<'div'> {
  isEditable?: boolean;
  rating: number;
  // add ? to make setRating optional, so Rating can be used without editing mode
  setRating: (rating: number) => void;
}
