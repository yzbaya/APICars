import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import './Search/Search.css'
const Playground = function Playground() {
  const defaultProps = {
    options: pays,
    getOptionLabel: (option) => option.name,
  };
  const flatProps = {
    options: pays.map((option) => option.name),
  };
  const [value, setValue] = React.useState(null);

  return (
  
    <div className="Lieu"> 
    
     <Autocomplete
      {...defaultProps}
      id="controlled-demo"
      value={value}
      onChange={(event, newValue) => {
        console.log("event", event);
        console.log("newValue", newValue);
        setValue(newValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Lieu de prise en charge"
          variant="standard"
        />
      )}
    />  
    </div>
    // <Stack spacing={1} sx={{ width: 300 }}>
   
    // </Stack>
  );
};
const pays = [
  { id: 416, name: "Tunis : Aéroport Tunis-Carthage" },
  { id: 418, name: "The Tunis : Port la Goulette" },
  { id: 419, name: "Tunis ville" },
  { id: 420, name: "Bizerte ville" },
  { id: 421, name: "Nabeul ville" },
  { id: 422, name: "Hammamet ville" },
  { id: 423, name: "Tabarka : Aéroport Tabarka" },
  { id: 425, name: "Enfidha: Aéroport Enfidha" },
  { id: 426, name: "Sousse ville" },
  { id: 427, name: "Monastir : Aéroport Habib Bourguiba" },
  { id: 429, name: "Mahdia ville" },
  { id: 430, name: "Sfax : Aéroport de Sfax-Thyna" },
  { id: 431, name: "Sfax ville" },
  { id: 432, name: "Gafsa ville" },
  { id: 433, name: "Djerba : Aéroport Djerba Mellita" },
  { id: 436, name: "Tozeur : Aéroport Tozeur Nefta" },
];
export { Playground };
