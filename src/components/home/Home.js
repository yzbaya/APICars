/* eslint-disable no-undef */
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import {FaMapMarkedAlt}from 'react-icons/fa'
//import { Grid } from '@mui/material';
// import dayjs from 'dayjs';
// import {DatePicker } from 'material-ui/DatePicker';
// import DatePicker from 'material-ui/DatePicker';

 function Home() {
   const [value, setValue] = React.useState(null);
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
 <section>
  <div>
    
    <FaMapMarkedAlt/>Lieu de prise en charge
       <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => <TextField {...params}  />}
      />
    </Stack> 
  </div>
  {/* <div>
     <Stack spacing={2} sx={{ width: 300 }}>
          <DatePicker
          label="Date mobile"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        </Stack>
  </div> */}

    </section>
  );
}   //hedha ?ne5dem f mtste teste ataw nwari ey hedha

export default Home;


const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 }]