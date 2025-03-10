import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/utils/AuthContext';
import ClientLayout from '@/components/ClientLayout';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UkuriKose - Professional Content Platform',
  description: 'A professional platform for creating and sharing high-quality content',
  keywords: 'content platform, articles, professional writing, knowledge sharing',
  authors: [{ name: 'UkuriKose Team' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className={`${inter.className} h-full`}>
        <AuthProvider>
          <ClientLayout>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
