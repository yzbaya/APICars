import * as React from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Slide from "@mui/material/Slide";
import FormControlLabel from "@mui/material/FormControlLabel";
import Input from "./input";
import MyForm from "./inputs";
import Grid from "@mui/material/Grid";

const icon = (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      "& .MuiTextField-root": { width: 150 },
    }}
  >
    <Grid>
      <label htmlFor="">Compagnie aérienne</label>
      <select>
        <option value="">Tunisair</option>
        <option value="">Tunisair Expert</option>
        <option value="">Nouvelaire</option>
        <option value="">Air France</option>
        <option value="">Corsair</option>
        <option value="">Lufthansa</option>
      </select>
    </Grid>
    <Grid>
      <label> N° de vol :</label>
      <input type="" name="" value="" placeholder="Numéro de vol"></input>
    </Grid>
  </Box>
);

export default function DivVol() {
  const [checked, setChecked] = React.useState(false);
  const containerRef = React.useRef(null);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ width: 200 }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Oui"
      />
      <Slide direction="up" in={checked} container={containerRef.current}>
        {icon}
      </Slide>
    </Box>
  );
}
