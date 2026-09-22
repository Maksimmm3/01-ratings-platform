'use client';

import cn from 'classnames';
import Link from 'next/link';
import { MdMenu } from 'react-icons/md';
import { Suspense } from 'react';
import { Logo, SearchInput } from '@/components';
import { useAppContext } from '@/context/app.context';
import styles from './Header.module.css';
import { HeaderProps } from './Header.props';

export const Header = ({ className, ...props }: HeaderProps) => {
  const { setIsMobileMenuOpen } = useAppContext();

  return (
    <div className={cn(styles.header, className)} {...props}>
      <div className={styles.left}>
        <button
          className={styles.burger}
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <MdMenu />
        </button>
        <Link href="/" className={styles.logoLink}>
          <Logo />
        </Link>
      </div>
      <Suspense fallback={<div>Loading search...</div>}>
        <SearchInput />
      </Suspense>
    </div>
  );
};
