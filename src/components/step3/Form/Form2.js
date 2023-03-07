import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CountrySelect from "./country";
import DatePi from "./datePe";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
function Form(
  setTitle,
  seTfirstName,
  seTlastName,
  seTemail,
  seTcountry,
  seTdatePermis,
  seTage
) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        //value="tilte"
        onChange={(event) => {
          setTitle(event.target.value || "Mr");
        }}
        id="title"
        label="tilte"
        variant="outlined"
      />
      <TextField
        //value="firstName"
        onChange={(event) => {
          seTfirstName(event.target.value);
        }}
        id="firstName"
        label="firstName"
        variant="outlined"
      />
      <TextField
        //value="lastName"
        onChange={(event) => {
          seTlastName(event.target.value);
        }}
        id="lastName"
        label="lastName"
        variant="outlined"
      />
      <TextField
        //value="email"
        onChange={(event) => {
          seTemail(event.target.value);
        }}
        id="email"
        label="email"
        variant="outlined"
      />
      <TextField
        //value="country"
        onChange={(event) => {
          seTcountry(event.target.value);
        }}
        id="country"
        label="country"
        variant="outlined"
      />
      <TextField
        //value="age"
        onChange={(event) => {
          seTage(event.target.value);
        }}
        id="age"
        label="age"
        variant="outlined"
      />
      <TextField
        //value="datePermis"
        onChange={(event) => {
          seTdatePermis(event.target.value);
        }}
        id="datePermis"
        label="datePermis"
        variant="outlined"
      />
    </Box>
  );
}

export default Form;
