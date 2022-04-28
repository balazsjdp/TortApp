import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const LoadingBar = () => {
  return (
    <Box sx={{ width: '100%', position:"absolute", left: 0, top: "4rem"  }}>
      <LinearProgress />
    </Box>
  );
}

export default LoadingBar;