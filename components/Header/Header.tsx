import cn from 'classnames';
import Link from 'next/link';
import { Suspense } from 'react';
import { Logo, SearchInput } from '@/components';
import styles from './Header.module.css';
import { HeaderProps } from './Header.props';

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <div className={cn(styles.header, className)} {...props}>
      <Link href="/" className={styles.logoLink}>
        <Logo />
      </Link>
      <Suspense fallback={<div>Loading search...</div>}>
        <SearchInput />
      </Suspense>
    </div>
  );
};
