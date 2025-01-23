'use client';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { theme } from '@/theme/theme';
import { store } from '@/store/store';
import React from 'react';

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </Provider>
  );
}