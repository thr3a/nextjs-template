// import React from 'react';
import { Providers } from '@/providers';
import { theme } from '@/theme';
import { ColorSchemeScript, Container, MantineProvider, Title, mantineHtmlProps } from '@mantine/core';

import '@mantine/core/styles.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja' {...mantineHtmlProps}>
      <head>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no' />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Providers>
            <Container>
              <Title mt={'md'} order={2}>
                Create Next App
              </Title>
              <Title order={6} mb={'md'} c={'dimmed'}>
                nyaa
              </Title>
              {children}
            </Container>
          </Providers>
        </MantineProvider>
      </body>
    </html>
  );
}
