import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Magna reprehenderit reprehenderit laborum occaecat adipisicing duis
        consequat laborum commodo deserunt ea do consectetur.
      </p>
      <p className={styles.text}>
        Magna reprehenderit reprehenderit laborum occaecat adipisicing duis
        consequat laborum commodo deserunt ea do consectetur.
      </p>

      <Link href='/ninjas'>
        <a className={styles.btn}>See all ninjas</a>
      </Link>
    </div>
  );
}
