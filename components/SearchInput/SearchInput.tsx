'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

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
    <div>
      <input
        type="text"
        onChange={handleSearch}
        value={searchString}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
      />
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};
