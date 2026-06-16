import styles from './loading.module.css';

export default function CourseLoading() {
  return (
    <div>
      <div className={styles.cardTitle} />
      <div className={styles.cardPrice} />
      <div className={styles.cardDescription} />
    </div>
  );
}
