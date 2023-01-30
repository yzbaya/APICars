import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { ListImages, ListInfo1, ListInfo2, ListPrice } from "./udf/Liste";
const DataFetching = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const res = require("../cars.json");
    let data = res.cars;
    console.log(data);
    setData(data);
  }, []);
  return (
    <div>
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
    </div>
  );
};
export default DataFetching;
