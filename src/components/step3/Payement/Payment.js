import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
export default function RadioBut() {
    const [value, setValue] = React.useState('female');
    const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box>
 <FormControl>
      <table >
      <tr className='button-69'><FmdGoodIcon />Je paye à l'agence</tr><hr/>
      
     <tr>
     <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
       
      >
        <FormControlLabel value="female"  control={<Radio />} label=" Agence Sousse Ville 5 Avenue Habib Thameur (Hotel Sousse city beach) Sousse 4000, Sousse" ></FormControlLabel>
        <FormControlLabel value="male" control={<Radio />} label="AGV|Agence Sousse Ville 5 Avenue Habib Thameur (Hotel Sousse city beach) Sousse 4000" />
        <FormControlLabel value="male1" control={<Radio />} label=" Agence Djerba Complex zitouna 2è étage B4, Houmet Souk, Djerba 4180 , Djerba" />
        <FormControlLabel value="female1" control={<Radio />} label=" Agence Gafsa Cite Echrif, près de Carrefour Gafsa, Gafsa 2100 , Gafsa " />
        <FormControlLabel value="male2" control={<Radio />} label=" Agence Hammamet Av Moncef Bey Complex Beya, Hammamet Sud 8050 , Hammamet" />
        <FormControlLabel value="female2"  control={<Radio />} label=" Agence Monastir R2 Avenue du Maroc Essouaini, Monastir 5000 , Monastir" />
        <FormControlLabel value="male3" control={<Radio />} label=" Agence Nabeul Avenue Hedi Nouira,Immeuble Aicha B2,3è étage, Oued Souhil, Nabeul 8000 , Nabeul " />
        <FormControlLabel  value="female3" control={<Radio />} label=" Agence Sfax Nasseria 14 Avenue de carthage, Imm Madina centre, 1er étage, Sfax 3000 , Sfax" />
      </RadioGroup>  
     </tr>
     
      </table>
    </FormControl>     
    </Box>
    
  );
}


