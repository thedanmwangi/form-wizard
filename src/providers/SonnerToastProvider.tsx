'use client';

import { useTheme } from 'next-themes';
import { Toaster } from 'sonner';

export default function SonnerToastProvider() {
  const { theme } = useTheme();

  return (
    <Toaster
      theme={theme as 'light' | 'dark' | 'system'}
      richColors={true}
      position='top-right'
      closeButton={true}
      toastOptions={{
        duration: 5000,
      }}
    />
  );
}
