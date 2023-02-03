import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import stepper from './stepper/stepper';
import ServicesAdd from './servicesAdd/ServicesAddionnels';
import Form from './Form/Form';
import DivVol from './vol/divVol';
import RadioBut from './Payement/Payment'
import Cond from './Condition/Condition'
export default function Appel() {
  return (
    <div>
 <div>  {stepper()}</div>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 4,
          width: 899,
          height: 'auto',
          padding: 3,
        },
      }}
    >
    
      <Paper elevation={3} >
        <div>
        <h4 className='label'>Services additionnels </h4>
          {ServicesAdd()}
        </div>
        <div>
          <h4 className='label'>Informations relatives au conducteur </h4>
          <span className='transp'>Merci de remplir les champs pour continuer</span>
        <div>{Form()}</div>          
        </div>
       
        <div>
      <h4 className='label'>Informations sur votre vol (facultatif) </h4>
      <span className='transp'>Avez-vous un vol le jour de la prise de véhicule ?</span>     
      <div>{DivVol()}</div>
        </div>

         <div>
      <h4 className='label'>Mode de paiement </h4>
      <span >Choisissez le mode de paiement qui vous convient</span>     
      <div>{RadioBut()}</div>
        </div> 
         <div>
      <h4 className='label'>Conditions </h4>
      <div>{Cond()}</div>
        </div>  
        <div>
             <button type="button" class="btn-btn2">Valider ma réservation</button>
              <button type="button" class="button-38">Retour</button>    
        </div>  
             
      </Paper>
     
      {/* <Paper elevation={3} /> */}
    </Box>      
    </div>
   
  );
}