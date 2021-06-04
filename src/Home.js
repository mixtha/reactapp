import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import Common from './Common';



const Home = ()=>{
   return (
      <>
      <Common name="Grow Your Business with Milan"
      imgsrc="https://picsum.photos/200/300"
      visit="/services"
      btname="Get Started"
      />
   </>
   );
};
  
export default Home;