'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input, Textarea, Rating, Button } from '@/components';
import styles from './ReviewForm.module.css';
import { ReviewFormProps } from './ReviewForm.props';

export const ReviewForm = ({ courseId }: ReviewFormProps) => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [errors, setErrors] = useState<{
    name?: string;
    text?: string;
    rating?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; text?: string; rating?: string } = {};

    if (!name.trim() || name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!text.trim() || text.trim().length < 5) {
      newErrors.text = 'Review must be at least 5 characters';
    }

    if (rating === 0) {
      newErrors.rating = 'Please select a rating';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          courseId,
          name,
          text,
          rating,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit review');
      }

      setName('');
      setText('');
      setRating(0);
      setErrors({});

      router.refresh();
    } catch (error) {
      console.error('Error submitting review:', error);
      setErrors({ text: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.title}>Leave a review</h3>

      <Input
        label="Your name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
      />

      <Textarea
        label="Your review"
        placeholder="Write your review..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        error={errors.text}
      />

      <div className={styles.ratingWrapper}>
        <span className={styles.ratingLabel}>Rating</span>
        <Rating isEditable rating={rating} setRating={setRating} />
        {errors.rating && (
          <span className={styles.ratingError}>{errors.rating}</span>
        )}
      </div>

      <Button appearance="primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit review'}
      </Button>
    </form>
  );
};
