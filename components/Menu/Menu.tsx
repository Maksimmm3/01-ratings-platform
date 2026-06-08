'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import styles from './Menu.module.css';
import { useAppContext } from '@/context/app.context';

export const Menu = () => {
  const { categories } = useAppContext();
  const pathname = usePathname();

  return (
    <div className={styles.menu}>
      <ul className={styles.list}>
        {categories.map((cat) => {
          const isActive = pathname === `/categories/${cat.alias}`;
          return (
            <li
              key={cat.id}
              className={cn(styles.item, {
                [styles.active]: isActive,
              })}
            >
              <Link href={`/categories/${cat.alias}`}>{cat.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
