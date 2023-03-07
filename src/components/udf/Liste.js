import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import Home from './home/Home';
const Img = styled("img")({
  margin: 0,
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
const ListImages = (props) => {
  // Correct! There is no need to specify the key here:
  return (
    <Typography variant="body2" gutterBottom>
      <Img
        alt="complex"
        src={"https://d1pnlk307kfyn2.cloudfront.net" + props.images[0]}
        sx={{ width: 220, height: 220 }}
      />
      <p variant="secondary" className="color">
        {props.marketingText}
      </p>
    </Typography>
  );
};
const ListInfo1 = (props) => {
  // Correct! There is no need to specify the key here:
  return (
    <Grid item xs container direction="column" spacing={10}>
      <Grid item xs>
        <Typography gutterBottom variant="subtitle1" component="div">
          <h4>{props.name.toLowerCase()}</h4>
        </Typography>

        <Typography variant="body2" gutterBottom>
          {props.category.name}
          <span className="badge badge-warning">
            <b> sur commande</b>
          </span>
        </Typography>
      </Grid>
      <Grid item xs sx={{ cursor: "pointer" }}>
        <Typography>
          <div>
            <a href="" title={props.equipment.more} className="a">
              Afficher plus d'équipements
            </a>
            <br />
            <a href="" title={props.terms}>
              Conditions de location
            </a>
          </div>
        </Typography>
      </Grid>
    </Grid>
  );
};
const ListInfo2 = (props) => {
  // Correct! There is no need to specify the key here:
  return (
    <Grid xs={5}>
      <Typography variant="subtitle1" component="div" container>
        <p className="text-warning">
          <b>Ce prix inclus</b>
        </p>

        <div className="Img-phrase-container">
          <Img src="https://www.citygo.tn/assets/img/check.png" alt="" />
          Kilométrage Illimité
          <Img src="https://www.citygo.tn/assets/img/check.png" alt="" />
          Livraison gratuite à l'aéroport
          <Img src="https://www.citygo.tn/assets/img/check.png" alt="" />
          1/4 carburant gratuit
        </div>
      </Typography>
    </Grid>
  );
};
const ListPrice = (props) => {

  return (
    <Box component="ul" aria-labelledby="category-b" item xs={3} className="ul">
      <Grid item xs>
        <Typography variant="subtitle1" component="div">
          prix par jour
        </Typography>
      </Grid>

      <Grid item xs>
        <Typography variant="subtitle1" component="div">
          prix pour n jour
        </Typography>

        <Typography variant="subtitle1" component="div">
          {props.totalAmount}
        </Typography>
      </Grid>
      <button type="button" className="btn-btn">
        Je réserve
      </button>
    </Box>
  );
};

export { ListImages, ListInfo1, ListInfo2, ListPrice };
