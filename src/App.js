import React, { useState } from 'react';
import './index.css';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import {Switch, Route} from "react-router-dom";
import Navbar from './Navbar';

const App = () =>{
  return(
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/services" component={Services}/>
      <Route exact path="/contact" component={Contact}/>
    </Switch>
    </>
  );
}


export default App;