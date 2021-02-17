import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>
        Magna reprehenderit reprehenderit laborum occaecat adipisicing duis
        consequat laborum commodo deserunt ea do consectetur.
      </p>
      <p>
        Magna reprehenderit reprehenderit laborum occaecat adipisicing duis
        consequat laborum commodo deserunt ea do consectetur.
      </p>

      <Link href='/ninjas'>
        <a>See all ninjas</a>
      </Link>
    </div>
  );
}
