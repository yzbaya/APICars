import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import '../DivHome2/DivHome2.css'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  marginTop:20,
  borderRadius:200,
  height:250,
  width:250,

}));

 function DivHome2() {
  return (
    <Box sx={{ width: '100%' }} className='DivHome2'>
      <div className='para'>
        <h2>4 étapes <span className='span'>simples pour louer une voiture</span></h2>
      </div>
      
      <Grid container>


          <Grid item xs={3}>
            
             <Item>
               <span class="nbr_icon">01</span>
               <div className='img-fluid'> 
                <img  src="https://www.citygo.tn/assets/img/calendar.png" alt="Icon"  width="50" height="50"></img>
                <h4>Date & lieu</h4>
                <p>Choisissez l'emplacement et la date de location souhaitée.</p>
               </div>
               
             </Item>
          </Grid>

        <Grid item xs={3}>
          <Item>
              <span class="nbr_icon1">02</span>
               <div className='img-fluid'> 
                <img  src="https://www.citygo.tn/assets/img/CAR1.png" alt="Icon"  width="50" height="50"></img>
                <h4>Choisissez une voiture</h4>
                <p>Sélectionnez le véhicule à l'aide de nos catalogues.</p>
               </div>
          </Item>
        </Grid>

        <Grid item xs={3}>
          <Item>
             <span class="nbr_icon2">03</span>
                 <div className='img-fluid'> 
                <img  src="https://www.citygo.tn/assets/img/BOOKING.png" alt="Icon"  width="50" height="50"></img>
                <h4>Faites une réservation</h4>
                <p>Entrez votre nom et les détails de votre réservation.</p>
               </div>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
             <span class="nbr_icon3">04</span>
                <div className='img-fluid'> 
                <img  src="https://www.citygo.tn/assets/img/THUMB.png" alt="Icon"  width="50" height="50"></img>
                <h4>Profitez de votre trajet</h4>
                <p>Profitez de votre voyage et de notre bon service!</p>
               </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DivHome2;