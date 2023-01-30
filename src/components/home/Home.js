/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
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
//import axios from "axios";

 const Home =()=> {
  const [data, setData] = useState([]);

 useEffect (()=>{
   const res = require("../../cars.json");
    let data = res.cars;
    console.log(data);
    setData(data);

  },
    []
    );

    const [value, setValue] = React.useState(null);
     function submit(){
            console.log('ytfjyhg')
       };



  return (
   
  
<form onSubmit={(e)=>submit(e)}>

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
        options={pays.map((option) => option.name)}
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
    value={value}
    onChange={(e) => {
      setValue(e);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
 </LocalizationProvider>
 </Stack>
       <LocalizationProvider dateAdapter={AdapterDayjs}  >
     <TimePicker
        label="Time"
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
        label="Time"
        value={value}
        onChange={(newValue) => {
      setValue(newValue);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
</LocalizationProvider>
</div>   
  <Button class="btn-btn1" >Devis et réservation </Button>    
      </div>
    </form>      
 
   
 
  );
}


export default Home;


const pays = [
  { name:'Tunis : Aéroport Tunis-Carthage'},
  { name: 'The Tunis : Port la Goulette' },
  { name: 'Tunis ville' },
  { name: 'Bizerte ville' },
  { name: 'Nabeul ville'},
  { name: "Hammamet ville" },
  { name: 'Tabarka : Aéroport Tabarka'},
  { name: 'Enfidha: Aéroport Enfidha'},
  { name: 'Sousse ville'},
  { name: 'Monastir : Aéroport Habib Bourguiba'},
  { name: 'Mahdia ville'},
  { name: 'Sfax : Aéroport de Sfax-Thyna'},
  { name: 'Sfax ville'},
  { name: 'Gafsa ville'},
  { name: 'Djerba : Aéroport Djerba Mellita'},
  { name: 'Tozeur : Aéroport Tozeur Nefta'}
]