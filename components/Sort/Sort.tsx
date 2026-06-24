'use client';

import cn from 'classnames';
import { useRouter, usePathname } from 'next/navigation';
import { SortType, SortProps } from './Sort.props';
import styles from './Sort.module.css';
import { MdSort, MdOutlineSouth, MdOutlineNorth } from 'react-icons/md';

export const Sort = ({ sort, dir, className, ...props }: SortProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleSort = (newSort: SortType) => {
    let newDir: 'asc' | 'desc' = 'asc';

    if (sort === newSort) {
      newDir = dir === 'asc' ? 'desc' : 'asc';
    } else {
      newDir = 'asc';
    }

    const params = new URLSearchParams();
    params.set('sort', newSort);
    params.set('dir', newDir);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={cn(styles.sort, className)} {...props}>
      <span
        onClick={() => handleSort('rating')}
        className={cn({ [styles.active]: sort === 'rating' })}
      >
        <MdSort className={styles.sortIcon} />
        By rating
        {sort === 'rating' && (
          <span className={styles.direction}>
            {dir === 'asc' ? <MdOutlineNorth /> : <MdOutlineSouth />}
          </span>
        )}
      </span>
      <span
        onClick={() => handleSort('price')}
        className={cn({ [styles.active]: sort === 'price' })}
      >
        <MdSort className={styles.sortIcon} />
        By price
        {sort === 'price' && (
          <span className={styles.direction}>
            {dir === 'asc' ? <MdOutlineNorth /> : <MdOutlineSouth />}
          </span>
        )}
      </span>
    </div>
  );
};
