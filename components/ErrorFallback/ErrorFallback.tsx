'use client';

import { useEffect } from 'react';
import styles from './ErrorFallback.module.css';
import { ErrorFallbackProps } from './ErrorFallback.props';

export const ErrorFallback = ({ error, reset, message = 'Something went wrong' }: ErrorFallbackProps) => {
  useEffect(() => {
    // Log error to console
    console.error('Error:', error);
  }, [error]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Failed to load</h2>
      <p className={styles.message}>{message}</p>
      <button className={styles.button} onClick={reset}>Try again</button>
    </div>
  );
};
