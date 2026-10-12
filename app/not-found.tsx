import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  const description =
    "Sorry, the page you're looking for doesn't exist or has been moved.";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Page Not Found</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.actions}>
        <Link href="/" className={styles.button}>
          Go to Home
        </Link>
        <Link href="/courses" className={styles.buttonSecondary}>
          Browse Courses
        </Link>
      </div>
    </div>
  );
}
