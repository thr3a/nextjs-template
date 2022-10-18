import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { Header } from '../features/common/components/Header';
import { Container } from '@mantine/core';
import { PageProvider } from '../features/common/contexts/PageContext';
import { NotificationsProvider } from '@mantine/notifications';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
          defaultRadius: 'xs',
          fontFamily: '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif'
        }}
      >
        <NotificationsProvider>
          <PageProvider>
            <Container>
              <Header></Header>
              <Component {...pageProps} />
            </Container>
          </PageProvider>
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}
