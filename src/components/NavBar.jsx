import React, { useState } from "react";
import GeneratorInput from './Generator';

const NavBar = ({ className }) => {
  return (
    <div id='NavBarPadding' className='h-16'>
      <div 
        id='NavBar' 
        className={`fixed top-0 left-0 right-0 h-16 flex flex-row text-white p-4 ${className}`}
      >
        <GeneratorInput className='mx-auto self-center'/>
      </div>
    </div>
  )
};
export default NavBar;
