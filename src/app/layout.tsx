import { Metadata, Viewport } from 'next';

import { Inter } from 'next/font/google';

import '@/styles/globals.css';

import AppThemeProvider from '@/providers/AppThemeProvider';
import SonnerToastProvider from '@/providers/SonnerToastProvider';

import Footer from '@/components/partials/Footer';
import Header from '@/components/partials/Header';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Form Wizard',
  description: 'Design your custom forms',
  icons: {
    icon: '/assets/favicon/favicon.ico',
    shortcut: '/assets/favicon/form-wizard-icon-16x16.png',
    apple: '/assets/favicon/form-wizard-icon-120x120.png',
  },
  manifest: '/assets/favicon/manifest.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f5' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  colorScheme: 'light dark',
};

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className={`${inter.variable} font-sans`}
      suppressHydrationWarning
    >
      <body>
        <AppThemeProvider defaultTheme='light' enableSystem>
          <Header />
          {children}
          <Footer />
          <SonnerToastProvider />
        </AppThemeProvider>
      </body>
    </html>
  );
}
