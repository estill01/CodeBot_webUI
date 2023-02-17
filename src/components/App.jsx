import Navbar from './NavBar'
import Outlet from './Outlet'

function App() {
  return (
    <div id="App" className="w-screen h-screen">
      <Navbar className='bg-slate-800 drop-shadow'/>
      <Outlet/>
    </div>
  )
}
export default App
