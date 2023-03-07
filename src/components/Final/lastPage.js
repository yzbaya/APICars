import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../Final/lastPage.css";
import Stepper from "../Final/stepper/stepper"
// const bull = (
//  <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

const card = (

  <React.Fragment className="all" elevation={3}>
<Stepper/>

    <CardContent >
      <Typography className='font' gutterBottom variant="">
        Réservation effectuée avec succès
      </Typography>

      <Typography variant="h5" component="div">
        Votre référence de dossier est :{"CG0051703"}
      </Typography>

      <Typography sx={{ mb: 1.5 }} className='P3'>
        Merci d'avoir choisi Notre site pour effectuer votre demande de réservation.
      </Typography>
      <Typography variant="body2">
        Nous avons le plaisir de vous informer que votre demande a été prise en compte par notre équipe et qu'elle sera traitée dans les plus brefs délais.
        <br />
      </Typography>
    </CardContent>
  </React.Fragment>

);

export default function Final() {
  return (
    <Box sx={{
       mx: "60px",
       pt:20,
       m: 1,
       borderRadius: 2,
       textAlign: "center",
       fontSize: "0.875rem",
       fontWeight: "700",
        }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
