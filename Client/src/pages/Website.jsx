import React from 'react'
import Companies from "../components/Companies/Companies";
import Contact from "../components/Contact/Contact";

import GetStarted from "../components/GetStarted/GetStarted";

import Hero from "../components/Hero/Hero";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";
const website = () => {
  return (
    <div className="App">
      
        <Hero />
      
      <Companies />
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      
    </div>
  )
}

export default website