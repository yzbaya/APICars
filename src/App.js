import "./App.css";
import React from "react";
import DataFetching from "./components/DataFetching";
//import Home from './components/home/Home.js';
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/home/Home";
import Search from "./components/Search";
// import {BrowserRouter as Router , Routes,Route,Link} from 'react-router-dom'
const App = () => {
  return (
    <>
      <div className="App">
        <Search />
      </div>
    </>
  );
};

//<Navbar />
//<Home/>
//<DataFetching/>
//<Footer/>
export default App;
