import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import '../stepper/stepper.css'
const steps = [
  'Choix du véhicule',
  ' Saisissez vos coordonnées & options',
  'Terminé!',
];

 function stepper() {
  return (
    <div className="principale">
 <Box sx={{ width: '100%' }} >
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>      
    </div>
   
  );
}
export default stepper;