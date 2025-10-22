import React from 'react';
import { ToastContainer } from 'react-toastify';
import { MantineProvider } from '@mantine/core';
import { theme } from '@/theme';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider theme={theme}>
      {children}

      <ToastContainer />
    </MantineProvider>
  );
};

export default Providers;
