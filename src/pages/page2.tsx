import type { NextPage } from 'next';
import Head from 'next/head';
import { IconDownload } from '@tabler/icons-react';
import styles from '../styles/Home.module.scss';
import { Button } from '@mantine/core';
import Link from 'next/link';
import { UserForm } from '@/features/form2/Form';

const Page2: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page 2</title>
      </Head>
      <h1 className={styles.title}>Page 2</h1>
      <IconDownload></IconDownload>
      <Button component={Link} href="https://www.google.com/">Google</Button>
      <UserForm></UserForm>
    </>
  );
};

export default Page2;
