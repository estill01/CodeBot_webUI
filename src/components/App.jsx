import Navbar from './NavBar'
import Outlet from './Outlet'

const App = () => {
  return (
    <div id="App" className="w-full h-screen">
      <Navbar className='bg-slate-800 drop-shadow z-50'/>
      <Outlet/>
    </div>
  )
}
export default App
