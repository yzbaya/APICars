import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Choix du véhicule',
  ' Saisissez vos coordonnées & options',
  'Terminé!',
];

 function stepper(n=1) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={n} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
export default stepper;