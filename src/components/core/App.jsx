import { Outlet } from 'react-router-dom';
import { useAtom } from 'jotai';
import { SidePanel } from './SidePanel';
import { Page } from '../pages';
import { TogglePanelButton} from '../utils';
import { isPanelOpenAtom } from '../../atoms';

export const App = () => {
  const [isPanelOpen] = useAtom(isPanelOpenAtom)
  return (
    <div id="App" className="w-full h-screen flex flex-row">
      { isPanelOpen && <SidePanel/> }
      {!isPanelOpen && 
      <div className='w-6'>
        <TogglePanelButton 
        className='absolute top-0 left-0 ml-2 mt-8 border-neutral-700 flex' 
        color="grey" 
        hoverColor="green"
        />
      </div>
      }
      <div className='flex-1 h-auto overflow-x-hidden'>
        <Outlet />
      </div>
    </div>
  )
}

//  TODO flex the Outlet directly (?)

