/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
//import Modal from '@mui/material/Modal';
import React, { useState, useEffect } from "react";
import{ styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import Home from './home/Home';
// import Button from '@mui/material/Button';import Button from 'react-bootstrap/Button';
import Box from '@mui/material/Box';
//  import {fa-car } from "@fortawesome/free-solid-svg-icons";
function DataFetching(){
 
  <div>
     {/* input */}
  </div>
  //const axios = require("axios");
   // const[post, setPost]= useState({})
  const [data, setData] = useState([]);
  //style image 
  const Img = styled('img')({
  margin: 0,
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
  });
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

 useEffect (()=>{

// axios.get('https://rapidapi.com/dominonet-lTpEE6zONeS/api/vin-decoder19/details').then(function (res) {
// 	console.log(res.data);
// }).catch(function (error) {
// 	console.error(error);
//     })
   const res = require("../cars.json");
    let data = res.cars;
    console.log(data);
    setData(data);

    // })

    // .catch((err) => {
    //   console.log(err);
    // });
  }


  );

  return (
    <div>
 
      {data.map((post) => (
        <div className="box-spacing">

     <Paper 
      sx={{
        p: 0,
        margin: 'auto',
        maxWidth: 1000,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      
      }}>
    
      <Grid container  className="box">

         <Grid item xs={3}>
          <Typography variant="body2" gutterBottom>
             <Img alt="complex" src={"https://d1pnlk307kfyn2.cloudfront.net" + post.images[0]} sx={{ width: 220, height: 220 }}/>
             <p variant="secondary" className="color">{post.marketingText}</p>
            </Typography>  
        </Grid>  
        

      <Grid item xs={3} sm container>

        <Grid item xs container direction="column" spacing={10}>

             <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                <h4>{post.name.toLowerCase()}</h4>
               </Typography>

               <Typography variant="body2" gutterBottom >
                {post.category.name}
                <span class="badge badge-warning"><b> sur commande</b></span>
               </Typography>
              </Grid>

              {/* <Typography >
                <FontAwesomeIcon icon="fa-solid fa-car-side" />
              </Typography> */}


{/* links */}


  <Grid item xs sx={{ cursor: 'pointer' }}>
            <Typography >
              <div >
            {/* <a onClick={handleOpen}>Afficher plus d'équipements</a><br/> */}
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        backgroundColor="black"
      >
           <Box sx={style}>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                 {post.equipment.more}
              </Typography>
        </Box>
      </Modal> */}
 
                <a href="" title={post.equipment.more} className="a">Afficher plus d'équipements</a><br/> 
                <a href="" title={post.terms}>Conditions de location</a>
    
               
              
      {/* <a onClick={handleOpen} >Conditions de location</a>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description">
      
     <Box > */}

          {/* <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            {post.terms}
          </Typography> */}
        {/* </Box> */}
      {/* </Modal> */}
    </div>
       </Typography>
        
     </Grid>

</Grid>


        <Grid xs={5}> 
        
            <Typography variant="subtitle1" component="div" container>
               <p class="text-warning"><b>Ce prix inclus</b></p>

         <div className="Img-phrase-container">

                <Img src="https://www.citygo.tn/assets/img/check.png" alt=""/>Kilométrage Illimité        
    
                <Img src="https://www.citygo.tn/assets/img/check.png" alt=""/>Livraison gratuite à l'aéroport       
                
                <Img src="https://www.citygo.tn/assets/img/check.png" alt=""/>1/4 carburant gratuit 
                                           
          </div>  

            </Typography>
        </Grid>  

     </Grid>


   <Box component="ul" aria-labelledby="category-b" xs={3} className="ul">

          <Grid item xs >
            <Typography variant="subtitle1" component="div">
             prix par jour
            </Typography>
          </Grid>   
   
        <Grid item xs>
            <Typography variant="subtitle1" component="div">
              prix pour n jour
            </Typography>

            <Typography variant="subtitle1" component="div">
             {post.totalAmount}
            </Typography>
          
      </Grid> 
          <button type="button" class="btn-btn">Je réserve</button>
  </Box>
        </Grid>      
    </Paper>

 </div>
 
      ))}
    </div>
  );
}
export default DataFetching;
