'use client';

import Link from 'next/link';
import cn from 'classnames';
import { MdClose } from 'react-icons/md';
import { useAppContext } from '@/context/app.context';
import styles from './MobileMenu.module.css';

export const MobileMenu = () => {
  const { categories, isMobileMenuOpen, setIsMobileMenuOpen } = useAppContext();

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(styles.overlay, {
          [styles.overlayVisible]: isMobileMenuOpen,
        })}
        onClick={closeMenu}
      />

      {/* Menu */}
      <aside
        className={cn(styles.menu, {
          [styles.menuOpen]: isMobileMenuOpen,
        })}
      >
        <div className={styles.header}>
          <span className={styles.title}>Menu</span>
          <button
            className={styles.closeButton}
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <MdClose />
          </button>
        </div>

        <ul className={styles.list}>
          <li>
            <Link href="/courses" className={styles.link} onClick={closeMenu}>
              All courses
            </Link>
          </li>
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link
                href={`/categories/${cat.alias}`}
                className={styles.link}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};
