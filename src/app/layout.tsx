import type { Metadata } from 'next';
import { Header } from '@/components/header/Headerr';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

export const metadata: Metadata = {
  title: 'My portfolio',
  description: 'App marketplace with usage rights',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <MantineProvider>
          <Header />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
