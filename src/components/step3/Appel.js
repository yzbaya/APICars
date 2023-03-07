// import * as React ,, { useState }  from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import stepper from "./stepper/stepper";
import ServicesAdd from "./servicesAdd/ServicesAddionnels";
import Form from "./Form/Form2";
import DivVol from "./vol/divVol";
import RadioBut from "./Payement/Payment";
import Cond from "./Condition/Condition";
import React, { useState } from "react";

import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom";
import { useApi } from "../useApi";
import { useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import moment from "moment";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Appel() {
  const { state } = useLocation();

  // const { state } = useLocation();
  const [title, setTitle] = useState(null);
  const [firstName, seTfirstName] = useState(null);
  const [lastName, seTlastName] = useState(null);
  const [email, seTemail] = useState(null);
  const [country, seTcountry] = useState(null);
  const [datePermis, seTdatePermis] = useState(null);
  const [age, seTage] = useState(null);
  const navigate = useNavigate();
  const appel = async (e) => {
    e.preventDefault();
    const searchQuery = {
      title: title,
      firstName: firstName,
      lastName: lastName,
      email: email,
      country: country,
      age: age,
      datePermis: moment(new Date(datePermis)).format("YYYY-MM-DD"),
      ...state,
    };
    console.log("🚀 ~ file: Search.js:54 ~ search ~ searchQuery", searchQuery);
    navigate("/reviewandbook1", { state: searchQuery });
    // postSearch(newUser);
    // dispatch(postSearch(newUser));
    // console.log(newUser);
    //   // setFirst_Name("");
    //   // setLast_Name("");
    //   // setPassword("");
    //   // setEmail("");
    //   // setPhone("");
  };
  // const { error, isLoading, data } = useApi(
  //   "http://n03.boosterbc.com:8157/cars/checkRate",
  //   state
  // );
  // // const navigate = useNavigate();
  // // const reviewandbook = (e) => {
  // //   e.preventDefault();
  // //   const searchQuery = {
  // //     apikey: "dd8a18ba-3464-49d9-bb10-b2bc5f448155",
  // //     pickUpId: locality.id,
  // //     dropOffId: locality.id,
  // //     pickupDate: moment(new Date(pickUpDate)).format("YYYY-MM-DD"),
  // //     dropoffDate: moment(new Date(pickDownDate)).format("YYYY-MM-DD"),
  // //     pickupTime: moment(new Date(pickUpDate)).format("HH:mm"),
  // //     dropoffTime: moment(new Date(pickDownDate)).format("HH:mm"),
  // //   };
  // //   console.log("🚀 ~ file: Search.js:54 ~ search ~ searchQuery", searchQuery);
  // //   navigate("/search", { state: searchQuery });
  // //   // postSearch(newUser);
  // //   // dispatch(postSearch(newUser));
  // //   // console.log(newUser);
  // //   //   // setFirst_Name("");
  // //   //   // setLast_Name("");
  // //   //   // setPassword("");
  // //   //   // setEmail("");
  // //   //   // setPhone("");
  // // };
  // if (error) {
  //   console.error("🚀 ~ file: Appel.js:48 ~ Appel ~ error:", error);
  //   return <Alert severity="error">{error}</Alert>;
  // }
  // console.log("🚀 ~ file: Appel.js:51 ~ Appel ~ isLoading:", isLoading);
  // if (isLoading) {
  //   return (
  //     <Container fixed>
  //       <Box sx={{ m: 1 }}>
  //         {/* <Grid container justify="center"> */}
  //         <CircularProgress />
  //         {/* </Grid> */}
  //       </Box>
  //     </Container>
  //   );
  // }
  // const { car } = data;
  // console.log("🚀 ~ file: Appel.js:63 ~ Appel ~ car:", car);

  return (
    <div>
      <div> {stepper()}</div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 4,
            width: 899,
            height: "auto",
            padding: 3,
          },
        }}
      >
        <Paper elevation={3}>
          {/* <div>
            <h4 className="label">Services additionnels </h4>
            {ServicesAdd()}
          </div> */}
          <div>
            <h4 className="label">Informations relatives au conducteur </h4>
            <span className="transp">
              Merci de remplir les champs pour continuer
            </span>
            <div>
              {Form(
                setTitle,
                seTfirstName,
                seTlastName,
                seTemail,
                seTcountry,
                seTdatePermis,
                seTage
              )}
            </div>
          </div>

          {/* <div>
            <h4 className="label">Informations sur votre vol (facultatif) </h4>
            <span className="transp">
              Avez-vous un vol le jour de la prise de véhicule ?
            </span>
            <div>{DivVol()}</div>
          </div> */}

          {/* <div>
            <h4 className="label">Mode de paiement </h4>
            <span>Choisissez le mode de paiement qui vous convient</span>
            <div>{RadioBut()}</div>
          </div>
          <div>
            <h4 className="label">Conditions </h4>
            <div>{Cond()}</div>
          </div> */}
          <div>
            {/* <button type="button" className="btn-btn2">
              Valider ma réservation
            </button> */}
            {/* <button onClick={appel} type="button" className="button-38">
              Retour
            </button> */}
            <Stack
              m={1}
              direction="row"
              display="flex"
              alignItems="center"
              spacing={65}
            >
              <Button variant="outlined" color="error">
                Retour
              </Button>
              <Button onClick={appel} variant="contained" color="success">
                Valider ma réservation
              </Button>
            </Stack>
          </div>
        </Paper>

        {/* <Paper elevation={3} /> */}
      </Box>
    </div>
  );
}
