import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { ListImages, ListInfo1, ListInfo2, ListPrice } from "./udf/Liste";
import stepper from "./step3/stepper/stepper";
import { useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { useApi } from "./useApi";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

const DataFetching = (aaa) => {
  
  const { state } = useLocation();
  const navigate = useNavigate();
  const { error, isLoading, data } = useApi(
    "http://n03.boosterbc.com:8157/cars/availability",
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
  const { cars } = data;
  const stepTwo = (e, args) => {
    e.preventDefault();
    const searchQuery = {
      ...state,
      currency: args.currency,
      searchCode: data.searchCode,
      modelId: args.modelId,
    };
    navigate("/reviewandbook", { state: searchQuery });
  };
  return (
    <Container className="container">
      <Box sx={{ m: 1 }}>
        {stepper()}
        {cars.map((post) => (
          <div className="box-spacing">
            <Paper
              sx={{
                p: 0,
                margin: "auto",
                maxWidth: 1000,
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              <Grid container className="box">
                <Grid item xs={3}>
                  {ListImages(post)}
                </Grid>

                <Grid item xs={3} sm container>
                  {ListInfo1(post)}
                  {ListInfo2(post)}
                </Grid>

                {ListPrice(post, stepTwo)}
              </Grid>
            </Paper>
          </div>
        ))}
      </Box>
    </Container>
  );
};
export default DataFetching;
