import { SidePanel } from './SidePanel'
import Outlet from './Outlet'
import TogglePanelButton from '../utils/TogglePanelButton'
import { useAtom } from 'jotai'
import { isPanelOpenAtom } from '../../atoms'


// TODO Fix how you're placing the toggle button
const App = () => {
  const [isPanelOpen] = useAtom(isPanelOpenAtom)
  return (
    <div id="App" className="w-full h-screen flex flex-row">
      { isPanelOpen && <SidePanel/> }
      {!isPanelOpen && 
        <div className='flex flex-col'>
          <div className='h-16 flex flex-col'>
            <div className='flex-1'/>
            <TogglePanelButton className='flex self-baseline mt-6 border-neutral-700' color="grey" hoverColor="green"/>
            <div className='flex-1'/>
          </div>
          <div className='flex-1'/>
        </div>
      }
      <Outlet className='flex-1'/>
    </div>
  )
}
export default App
