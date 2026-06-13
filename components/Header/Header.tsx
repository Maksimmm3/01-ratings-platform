import cn from 'classnames';
import { Suspense } from 'react';
import styles from './Header.module.css';
import { HeaderProps } from './Header.props';
import { SearchInput } from '@/components';

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <div className={cn(className, styles.header)} {...props}>
      <div>Logo</div>
      <Suspense fallback={<div>Loading search...</div>}>
        <SearchInput />
      </Suspense>
    </div>
  );
};
