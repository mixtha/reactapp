import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import Common from './Common';




const About = ()=>{
   return (
   <>
   <Common name="Welcome to About Image"
   imgsrc="https://picsum.photos/200/300"
   visit="/contact"
   btname="Contact Now"
   />
   </>
   );
};
  
export default About;