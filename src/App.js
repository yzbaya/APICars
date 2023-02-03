import './App.css';
import React from 'react';
import DataFetching from './components/DataFetching';
//import Home from './components/home/Home.js';
import Footer from './components/Footer/footer'
import Navbar from './components/Navbar/navbar';
import Home from './components/home/Home';
// import  Stepper  from './components/step3/stepper/stepper';
// import ServicesAdd from './components/step3/servicesAdd/ServicesAddionnels'
// import Form from  './components/step3/Form/Form'
// import {BrowserRouter as Router , Routes,Route,Link} from 'react-router-dom'
// import DivVol from './components/step3/vol/divVol'
// import RadioBut from './components/step3/Payement/Payment'
import Appel from './components/step3/Appel'
// import Cond from './components/step3/Condition/Condition'

const App=()=> {
  return (
    
   <div className="App">
    <Navbar />
    <Home/>
    <DataFetching/>
    {/* <Navbar /> 
   <Home/> */}
    {/* <Appel/> */}
   {/* <DataFetching/>
       <Footer/> */}
    {/* <ServicesAdd/> */}
        {/* <Navbar /> 
       <Home/> 
       <Stepper/>
     <DataFetching/>
    <Footer/>  */}
    </div>
    

  );
}

export default App;
