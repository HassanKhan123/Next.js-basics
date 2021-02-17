import Head from 'next/head';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Magna reprehenderit reprehenderit laborum occaecat adipisicing duis
        consequat laborum commodo deserunt ea do consectetur.
      </p>
      <p>
        Magna reprehenderit reprehenderit laborum occaecat adipisicing duis
        consequat laborum commodo deserunt ea do consectetur.
      </p>
      <Footer />
    </div>
  );
}
