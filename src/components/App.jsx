import { useState } from 'react'
import Navbar from './NavBar'


function App() {
  return (
    <div id="App" className="w-screen h-screen">
      <Navbar className='bg-slate-800 drop-shadow'/>
      <Outlet />
    </div>
  )
}
export default App


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


