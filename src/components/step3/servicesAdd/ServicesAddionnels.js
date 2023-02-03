import { React, useState } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
 import { Counter } from './Counter';
import { color } from '@mui/system';



 function ServicesAdd(){
const Item = styled(Box)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor:"#EBEBEB",
}));

const Img = styled("img")({
  margin: 0,
  display: "block",
  maxWidth: "45px",
  maxHeight: "45px",
});
  return (
    <Grid className='self-center1' sx={{ flexGrow: 1 ,width:800,margin:2 }}>
      
      <Grid  container spacing={2} xs={12} >
        <Grid xs={2}>
          <Item><Img
        alt="complex"
        src={"https://www.citygo.tn/assets/img/options/opt_294.png"}
      /> </Item>
        </Grid>

        <Grid xs={4} >
          <Item ><b>Siège bébé</b></Item>
          <Item>4.00 TND par jour</Item>
        </Grid>


       <Grid xs={4}>
          <Item>4.00 TND   </Item>
        </Grid>

        <Grid xs={2}>
          <Item> {Counter()}  </Item>
        </Grid>

        </Grid>
                

     <Grid container spacing={2} xs={12}>
        <Grid xs={2}>
         <Item>  <Img
        alt="complex"
        src={"https://www.citygo.tn/assets/img/options/opt_11.png"}
      /> </Item>
        </Grid>

        <Grid xs={4}>
          <Item className='plein'><b>Plein Carburant</b></Item>

        </Grid>


       <Grid xs={4}>
          <Item>120.00 TND </Item>
        </Grid>

        <Grid xs={2}>
          <Item> {Counter()}   </Item>
        </Grid>

        </Grid>  


    
    </Grid>
    
  );
 }

export default ServicesAdd;






