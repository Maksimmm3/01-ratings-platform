'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button } from '@/components';
import styles from './SearchInput.module.css';

export const SearchInput = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchString, setSearchString] = useState('');
  const query = searchParams.get('q') || '';

  useEffect(() => {
    setSearchString(query);
  }, [query]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  const handleSubmit = () => {
    router.push(`/search?q=${searchString}`);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search courses..."
        onChange={handleSearch}
        value={searchString}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
      />
      <Button
        appearance="primary"
        type="submit"
        onClick={handleSubmit}
        className={styles.searchButton}
      >
        Search
      </Button>
    </div>
  );
};
