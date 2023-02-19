import NavBar from './NavBar';
import SidePanel from './SidePanel'
import Outlet from './Outlet'

const App = () => {
  return (
    <div id="App" className="w-full h-screen flex flex-row">
      <SidePanel/>
      <Outlet className='flex-1'/>
    </div>
  )
}
export default App
