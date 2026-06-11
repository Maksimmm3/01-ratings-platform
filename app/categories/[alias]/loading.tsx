import styles from './loading.module.css';

export default function CategoryLoading() {
  return (
    <main>
      <div className={styles.title} />
      <div className={styles.counter} />

      {[1, 2, 3].map((i) => (
        <div key={i} className={styles.card}>
          <div className={styles.cardTitle} />
          <div className={styles.cardPrice} />
          <div className={styles.cardDescription} />
        </div>
      ))}
    </main>
  );
}
