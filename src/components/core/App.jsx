import { SidePanel } from './SidePanel';
import { ProjectsPage } from '../pages';
import TogglePanelButton from '../utils/TogglePanelButton';
import { useAtom } from 'jotai';
import { isPanelOpenAtom } from '../../atoms';

import { RouterProvider } from 'react-router-dom';
import { router } from '../router/Router.jsx';


// TODO Fix how you're placing the toggle button
const App = () => {
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
      <RouterProvider 
      router={router}
      fallbackElement={<div>loading...</div>}
      />
    </div>
  )
}
export default App
