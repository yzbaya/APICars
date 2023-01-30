/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { FaMapMarkedAlt } from "react-icons/fa";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { FaCalendarAlt } from "react-icons/fa";
import { Button } from "@mui/material";
//import axios from "axios";
// const [list, setList] = useState(JSON.parse(localStorage.getItem("list")) || [])

const Home = () => {
  // const [data, setData] = useState([]);
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );
  const handleSubmit = () => {
    const todoItem = {
      id: Math.floor(Math.random() * 10000),
      value: newTodo,
    };

    if (todoItem) {
      setData([...list, todoItem]);
      setNewTodo("");
    }
    /*gets the oldlist and whats inside of it and adds the new item */
    console.log(list);

    // Store the value in localStorage
    localStorage.setItem("list", JSON.stringify(list));
  };
  useEffect(() => {
    const res = require("../../cars.json");
    let data = res.cars;
    console.log(data);
    setData(data);
  }, []);

  const [value, setValue] = React.useState(null);
  function submit(e) {
    console.log(e);
  }

  return (
    <form onSubmit={(e) => submit(e)}>
      <div className="links">
        <ul>
          <Button>
            <li>location</li>
          </Button>
          <Button>
            <li>transferts</li>
          </Button>
          <Button>
            <li>location avec chauffeur</li>
          </Button>
        </ul>
      </div>
      <div className="division">
        <div>
          <h1>Réservez votre location de voiture en Tunisie</h1>
        </div>

        <div className="place">
          <FaMapMarkedAlt />
          Lieu de prise en charge
          <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
              options={pays.map((option) => option.name)}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </div>

        {/* Date et heure de prise en charge */}
        <div className="dateTimePicker">
          <FaCalendarAlt />
          Date et heure de prise en charge
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
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
        <div className="dateTimePicker">
          <FaCalendarAlt />
          Date et heure de restitution
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
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
        <Button className="btn-btn1" onClick={() => handleSubmit()}>
          Devis et réservation{" "}
        </Button>
      </div>
    </form>
  );
};

export default Home;

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
