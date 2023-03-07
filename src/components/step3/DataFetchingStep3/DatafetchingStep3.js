import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { ListImages1, ListInfo1Step3, ListInfo2Step3, ListPrice1 } from './ListeStep3';
import stepper from '../stepper/stepper'

const DataFetchingStep3 = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const res = require("../../../cars.json");
  //   let data = res.cars;
  //   console.log(data);
  //   setData(data);
  // }, []);
  return (
    <div className="principale">
      {/* {stepper()} */}
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
                {ListImages1()}
              </Grid>

              <Grid item xs={3} sm container>
                {ListInfo1Step3()}
                {ListInfo2Step3()}
              </Grid>

              {ListPrice1()}
            </Grid>
          </Paper>
        </div>
      ))}
    </div>
  );
};
export default DataFetchingStep3;
