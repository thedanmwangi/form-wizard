'use client';

import { ThemeProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';

const AppThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
