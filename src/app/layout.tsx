'use client';

import { useState } from 'react';

import SideNav from '@/components/side-nav';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '../styles/globals.css';

import { Inter } from 'next/font/google';

import Header from '@/components/header';
import HeaderMobile from '@/components/header-mobile';
import MarginWidthWrapper from '@/components/margin-width-wrapper';
import PageWrapper from '@/components/page-wrapper';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body className={`bg-white ${inter.className}`}>
        <div className="flex">
          <SideNav />
          <main className="flex-1">
            <MarginWidthWrapper>
              <Header />
              <HeaderMobile />
              <QueryClientProvider client={queryClient}>
                <PageWrapper>{children}</PageWrapper>
              </QueryClientProvider>
            </MarginWidthWrapper>
          </main>
        </div>
      </body>
    </html>
  );
}
