'use client';

import { ErrorFallback } from '@/components';

interface CategoryErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function CategoryError({ error, reset }: CategoryErrorProps) {
  return (
    <ErrorFallback
      error={error}
      reset={reset}
      message="Failed to load course"
    />
  );
}
