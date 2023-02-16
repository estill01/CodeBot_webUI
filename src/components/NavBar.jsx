import React, { useState } from "react";
import Generator from './Generator';

const NavBar = (props) => {
  return (
    <div 
      id='NavBar' 
      className={`fixed top-0 left-0 right-0 flex items-center bg-gray-800 text-white p-4 ${props.className}`}
    >
      <Generator className='flex'/>
    </div>
  )
};
export default NavBar;
