import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function prenom() {
  return (
    <Box
      sx={{
        height: 20,
      }}
    />
  );
}

export default function LayoutTextFields() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { width:130},
      }}
    >
      <TextField label={'Prenom'} margin="normal" />
    </Box>
  );
}
