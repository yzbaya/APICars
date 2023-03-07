import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import DataFetching from "./components/DataFetching";
//import Home from './components/home/Home.js';
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/navbar";
// import Home from './components/home/Home';
// import DataFetching from './components/DataFetching';
import Search from "./components/udf/Search/Search";
// import Search from './components/Search'
// import  Stepper  from './components/step3/stepper/stepper';
// import ServicesAdd from './components/step3/servicesAdd/ServicesAddionnels'
// import Form from  './components/step3/Form/Form'
// import {BrowserRouter as Router , Routes,Route,Link} from 'react-router-dom'
// import DivVol from './components/step3/vol/divVol'
// import RadioBut from './components/step3/Payement/Payment'
import Appel from "./components/step3/Appel";
//  import { Route, Routes } from "react-router-dom"
// import Cond from './components/step3/Condition/Condition'
import Acceuil from "./components/Acceuil";
// import Location from './components/pages/Location/Location'
// import Team from './components/pages/Team';
import Box from "@mui/material/Box";

const App = () => {
  return (
    <div className="App">
      <Box>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Search />
                <Acceuil />
              </div>
            }
          />
          <Route
            path="/steptwo"
            element={
              <div>
                <DataFetching />
              </div>
            }
          />
        </Routes>

        {/* <DataFetching/> */}
        {/* <Appel/> */}
        <Footer />
      </Box>
    </div>
  );
};
export default App;
