import { useState } from 'react'
import reactLogo from '../assets/react.svg'
// import './App.css'
import Navbar from './Navbar'
// import Generator from './Generator'


const initialState = {
  prompt: ""
}

const Outlet = (props) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-lg font-bold">
        State
      </div>
      <div className='font-mono'>
        prompt: { initialState.prompt }
      </div>
    </div>
  )
}


function App() {
  return (
    <div id="App" className="w-screen h-screen">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App


