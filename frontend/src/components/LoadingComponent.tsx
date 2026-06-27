import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';

const LoadingComponent = () => {
  return (
    <Backdrop
      open
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // leve overlay escuro
      }}
      className="flex items-center justify-center w-full h-full"
    >
      <CircularProgress color="secondary" sx={{ color: '#0d3b2e' }} size="5rem" />
    </Backdrop>
  );
};

export default LoadingComponent;
