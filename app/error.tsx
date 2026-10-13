'use client';

import { useEffect } from 'react';
import { ErrorFallback } from '@/components';

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Root error:', error);
  }, [error]);

  return (
    <ErrorFallback error={error} reset={reset} message="Something went wrong" />
  );
}
