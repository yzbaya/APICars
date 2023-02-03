import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



export default function Email() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { width: 150 },
      }}
    >
      <TextField label={'E-mail'}  margin="normal" />
    </Box>
  );
}
