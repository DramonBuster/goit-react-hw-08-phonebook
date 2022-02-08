import React from 'react';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <Typography
      sx={{
        color: '#808090',
      }}
      variant="h1"
      component="div"
      gutterBottom
    >
      Home page
    </Typography>
  );
}
