'use client';

import { useState, KeyboardEvent } from 'react';
import cn from 'classnames';
import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';
import StarIcon from './star.svg';

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [focusIndex, setFocusIndex] = useState(rating || 1);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!isEditable || !setRating) return;

    let newIndex = focusIndex;

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        e.preventDefault();
        newIndex = Math.min(focusIndex + 1, 5);
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
        e.preventDefault();
        newIndex = Math.max(focusIndex - 1, 1);
        break;
      case 'Home':
        e.preventDefault();
        newIndex = 1;
        break;
      case 'End':
        e.preventDefault();
        newIndex = 5;
        break;
      default:
        return;
    }

    setFocusIndex(newIndex);
    setRating(newIndex);
  };

  const constructRating = (currentRating: number) => {
    return new Array(5).fill('').map((_: string, i: number) => {
      const starValue = i + 1;
      return (
        <span
          key={i}
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(starValue)}
          onMouseLeave={() => changeDisplay(0)}
          onClick={() => onClick(starValue)}
        >
          <StarIcon />
        </span>
      );
    });
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) return;
    setHoverRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) return;
    setRating(i);
    setFocusIndex(i);
  };

  const currentRating = hoverRating || rating;

  return (
    <div
      {...props}
      role={isEditable ? 'radiogroup' : undefined}
      aria-label={isEditable ? 'Rating' : undefined}
      tabIndex={isEditable ? 0 : undefined}
      onKeyDown={handleKeyDown}
      className={cn(props.className, { [styles.focusable]: isEditable })}
    >
      {constructRating(currentRating)}
    </div>
  );
};
