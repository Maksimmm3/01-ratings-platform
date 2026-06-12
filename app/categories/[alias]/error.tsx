'use client';

import { useEffect } from 'react';
import styles from './error.module.css';

interface CategoryErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function CategoryError({ error, reset }: CategoryErrorProps) {
  useEffect(() => {
    // Log error to console
    console.error('Category page error:', error);
  }, [error]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Failed to load category</h2>
      <p className={styles.message}>
        {error.message || 'Something went wrong'}
      </p>
      <button className={styles.button} onClick={reset}>
        Try again
      </button>
    </div>
  );
}
