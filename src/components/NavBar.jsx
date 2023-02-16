import React, { useState } from "react";
import GeneratorInput from './Generator';
import LogoBot from '../assets/logo_bot/logo_bot.png';

const NavBar = ({ className }) => {
  return (
    <div id='NavBarPadding' className='h-16'>
      <div 
        id='NavBar' 
        className={`fixed top-0 left-0 right-0 h-16 flex flex-row text-white p-4 ${className}`}
      >
        <Logo/>
        <GeneratorInput className='mx-auto self-center'/>
      </div>
    </div>
  )
};
export default NavBar;

const Logo = ({className}) => {
  return (
    <div className={`flex flex-row content-center text-xl ${className}`}>
      <div className='my-auto mr-1 text-[#00f100] font-medium tracking-[-0.1em]'>
        &lt;/&gt;
      </div>
      <div className='my-auto font-semibold'>Code<span className='font-normal'>Bot</span></div>
    </div>
  )
}
