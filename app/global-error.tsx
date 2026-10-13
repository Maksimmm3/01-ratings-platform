'use client';

import { useEffect } from 'react';
import styles from './global-error.module.css';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          <h1 className={styles.title}>Something went wrong</h1>
          <p className={styles.message}>
            A critical error occurred. Please try again.
          </p>
          <button className={styles.button} onClick={reset}>
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
