import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { ListImages, ListInfo1, ListInfo2, ListPrice } from "./udf/Liste";
import stepper from "./step3/stepper/stepper";
import { useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Box from "@mui/material/Box";

const DataFetching = (aaa) => {
  const [data, setData] = useState([]);
  const { state } = useLocation();
  async function fetchData() {
    try {
      const response = await axios.post(
        "http://n03.boosterbc.com:8157/cars/availability",
        state
      );
      console.log(response);
      return setData(response.data?.cars);
    } catch (error) {
      console.log(error);
      return setData({ error: true });
    }
  }
  useEffect(() => {
    console.log(state);
    fetchData();
    // const res = require("../cars.json");
    // let data = res.cars;
    // console.log(data);
    // setData(response.data);
  }, []);
  return data.error ? (
    <Box>error</Box>
  ) : (
    <Box>
      {stepper()}
      {data.map((post) => (
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

              {ListPrice(post)}
            </Grid>
          </Paper>
        </div>
      ))}
    </Box>
  );
};
export default DataFetching;
