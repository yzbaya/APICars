/* eslint-disable no-undef */
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import {FaMapMarkedAlt}from 'react-icons/fa';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import {FaCalendarAlt} from 'react-icons/fa';
import { Button } from '@mui/material';

 function Home() {
 useEffect (()=>{

axios.get('https://rapidapi.com/dominonet-lTpEE6zONeS/api/vin-decoder19/details').then(function (res) {
	console.log(res.data);
}).catch(function (error) {
	console.error(error);
    })
  //  const res = require("../cars.json");
  //   let data = res.cars;
  //   console.log(data);
  //   setData(data);

    // })

    .catch((err) => {
      console.log(err);
    });
  }
,
[]
  );
    const [value, setValue] = React.useState(null);
    const handleSearch = async (e) =>{

    }
  return (
   

<section>

        <div className='links'>
        <ul>
         <Button><li>location</li></Button> 
         <Button><li>transferts</li></Button> 
          <Button><li>location avec chauffeur</li></Button>
        </ul>
      </div>
      <div className="division">
  <div>
    <h1>Réservez votre location de voiture en Tunisie</h1>
   </div>



  <div className='place'> 
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




{/* Date et heure de prise en charge */}
 <div className='dateTimePicker'>
  <FaCalendarAlt/>Date et heure de prise en charge
  <Stack spacing={2} sx={{ width: 300 }}>
 <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DatePicker
    label="Basic example"
    value={value}
    onChange={(newValue1) => {
      setValue(newValue1);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
 </LocalizationProvider>
 </Stack>
    <LocalizationProvider dateAdapter={AdapterDayjs}  >
     <TimePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
      setValue(newValue);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
  </LocalizationProvider>
 </div>




{/* Date et heure de restitution */}
 <div className='dateTimePicker'>
  <FaCalendarAlt/>Date et heure de restitution
  <Stack spacing={2} sx={{ width: 300 }}>
 <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DatePicker
    label="Basic example"
    value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
 </LocalizationProvider>
 </Stack>
        <LocalizationProvider dateAdapter={AdapterDayjs}  >
     <TimePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
      setValue(newValue);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
</LocalizationProvider>
</div>        
      </div>
    </section>      
   
 
  );
}

export default Home;


const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 }]