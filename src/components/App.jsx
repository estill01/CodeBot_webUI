import Navbar from './NavBar'
import Outlet from './Outlet'

const App = () => {
  return (
    <div id="App" className="w-full h-screen flex flex-col">
      <Navbar className='bg-slate-800 drop-shadow z-50'/>
      <Outlet className='flex-1'/>
    </div>
  )
}
export default App
