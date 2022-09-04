import type { NextPage } from 'next';
import Head from 'next/head';
import { IconDownload } from '@tabler/icons';
import styles from '../styles/Home.module.scss';

const Page2: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page 2</title>
      </Head>
      <h1 className={styles.title}>Page 2</h1>
      <IconDownload></IconDownload>
    </>
  );
};

export default Page2;
