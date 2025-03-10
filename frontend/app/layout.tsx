'use client';

import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { AuthProvider } from '@/utils/AuthContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UkuriKose - Your Trusted News Source',
  description: 'Stay informed with the latest news and articles from trusted sources.',
  keywords: 'news, articles, journalism, media',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
