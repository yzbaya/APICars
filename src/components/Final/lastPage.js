import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
//import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
//import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import "../Final/lastPage.css";
// import Stepper from "../Final/stepper/stepper";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useApi } from "./useApi";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import stepper from "../step3/stepper/stepper";

// const bull = (
//  <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

const card = (data) => (
  <Box sx={{ m: 1 }}>
    {stepper(3)}
    <Container className="container" sx={{ pt: 20, pb: 20 }}>
      <Box sx={{ m: 1 }}>
        <Typography className="font" gutterBottom variant="">
          Réservation effectuée avec succès
        </Typography>

        <Typography variant="h5" component="div">
          Votre référence de dossier est :{data.refresa}
        </Typography>

        <Typography sx={{ mb: 1.5 }} className="P3">
          Merci d'avoir choisi Notre site pour effectuer votre demande de
          réservation.
        </Typography>
        <Typography variant="body2">
          Nous avons le plaisir de vous informer que votre demande a été prise
          en compte par notre équipe et qu'elle sera traitée dans les plus brefs
          délais.
          <br />
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default function Final() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { error, isLoading, data } = useApi(
    "http://localhost:5000/bookings/makeBook",
    state
  );
  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }
  console.log(isLoading);
  if (isLoading) {
    return (
      <Container fixed>
        <Box sx={{ m: 1 }}>
          {/* <Grid container justify="center"> */}
          <CircularProgress />
          {/* </Grid> */}
        </Box>
      </Container>
    );
  }
  return (
    <Box
      sx={{
        mx: "60px",
        pt: 20,
        m: 1,
        borderRadius: 2,
        textAlign: "center",
        fontSize: "0.875rem",
        fontWeight: "700",
      }}
    >
      <Card variant="outlined">{card(data)}</Card>
    </Box>
  );
}
