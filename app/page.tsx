import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import styles from './page.module.css';

export const revalidate = 3600;

export default async function HomePage() {
  const categories = await prisma.category.findMany({
    include: {
      courses: true,
    },
  });

  return (
    <main className={styles.container}>
      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Find the best IT courses</h1>
        <p className={styles.description}>
          Browse courses from top instructors, read reviews, and choose the
          right one for you.
        </p>
        <Link href="/courses" className={styles.ctaButton}>
          Browse all courses →
        </Link>
      </section>

      {/* Categories */}
      <section className={styles.categories}>
        <h2 className={styles.sectionTitle}>Categories</h2>
        <div className={styles.categoriesGrid}>
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.alias}`}
              className={styles.categoryCard}
            >
              <h3 className={styles.categoryName}>{category.name}</h3>
              <p className={styles.categoryCount}>
                {category.courses.length} courses
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
