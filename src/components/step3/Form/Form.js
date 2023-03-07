import React, { useState } from "react";
import Box from "@mui/material/Box";
import CountrySelect from "./country";
import DatePi from "./datePe";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
function Form() {
  return (
    <React.Fragment>
      <div className="content">
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Grid>
            <Grid style={{ padding: "9px" }}>
              <div className="text-dark">
                <select className="form-control">
                  <option value="">civilité*</option>
                  <option value="1">Monsieur</option>
                  <option value="2">Mme</option>
                  <option value="3">Mlle</option>
                </select>
              </div>
            </Grid>

            <Grid style={{ padding: "10px" }}>
              <div className="text-dark">
                <input className="form-control" placeholder="e-mail*" />
              </div>
            </Grid>

            <Grid style={{ padding: "9px" }}>
              <div className="text-dark">
                <input className="form-control" placeholder="Age" />
              </div>
            </Grid>
          </Grid>

          <Grid>
            <Grid style={{ padding: "9px" }}>
              <div className="text-dark">
                <input className="form-control" placeholder="Nom*" />
              </div>
            </Grid>

            <Grid style={{ padding: "9px" }}>
              <div className="text-dark">{CountrySelect()}</div>
            </Grid>

            <Grid style={{ padding: "9px" }}>
              <div className="text-dark">{DatePi()}</div>
            </Grid>
          </Grid>

          <Grid>
            <Grid style={{ padding: "9px" }}>
              <div className="text-dark">
                <input className="form-control" placeholder="Prénom*" />
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </React.Fragment>
  );
}

export default Form;
