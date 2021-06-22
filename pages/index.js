import Head from 'next/head';
import Image from 'next/image';
import {Input} from '../components/Input';
import styles from '../styles/Home.module.scss';

import stays from '../stays.json';

import { HouseCard } from '../components/HouseCard';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Mulish:wght@700;800&display=swap"
          rel="stylesheet"
        />
        <title>Windbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Image src="/images/logo.png" width={100} height={20} />
        <Input value="Text" />
      </header>
      <main>
        <header className={styles.header}>
          <h3>Stays in Finland</h3>
          <span>12+ stays</span>
        </header>
        <section className={styles.cardContainer}>
          {
            stays.map( stay => {
              return <HouseCard stay={stay} />;
            }
            )
          }
        </section>
      </main>
    </div>
  );
}
