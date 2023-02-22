import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SpinnerCircular } from 'spinners-react';
import { atom, useAtom } from 'jotai';
import { 
  promptAtom, 
  isFetchingAtom, 
  isPanelOpenAtom,
  activePageAtom,
} from '../../../../atoms';
import { PAGE } from '../../../../utils';
import { 
  Icon, 
  Logo, 
  CodeGlyph,
  TogglePanelButton,
} from '../../../utils';
import { PanelSearchBar } from './PanelSearchBar';


export const SidePanel = ({className}) => {
  return (
    <div className='flex flex-col w-1/5 bg-black border-r border-neutral-900 drop-shadow-[2px_0_3px_rgba(0,0,0,0.25)]'>
      <PanelBanner className=''/>
      
      <div className='p-1.5'>
        <PanelSearchBar className=''/>
      </div>
      <PanelSectionHeader title={PAGE.dashboard} url='dashboard'/>
      <ProjectsList/>
      <PanelSectionHeader title={PAGE.marketplace} url='market'/>
      <PanelSectionHeader title={PAGE.configs} url='configs'/>
    </div>
  )
}

const PanelBanner = ({className}) => {
  return (
    <div className="flex flex-row items-center text-white p-2 bg-slate-900 drop-shadow-md bg-gradient-to-bl from-transparent to-[#00000057]">
      <Logo className='flex-1'/>
      <TogglePanelButton/>
    </div>
  )
}


const PanelSectionHeader = ({className, title, url}) => {
  const [ activePage, setActivePage ] = useAtom(activePageAtom);
  const inactiveStyles="bg-zinc-900 text-zinc-500"
  const activeStyles="bg-zinc-800 text-zinc-300"
  const baseStyles='transition-colors p-4 border-t border-t-zinc-800 font-bold flex flex-row items-center hover:cursor-pointer hover:text-zinc-300 hover:bg-zinc-800 active:bg-zinc-900 active:text-zinc-600 select-none'
  let styles = activePage === title ? baseStyles + ` ${activeStyles}` : baseStyles + ` ${inactiveStyles}`

  const handleClick = (e) => {
    setActivePage(title)
  }

  return (
    <Link
    to={`/${url}`}
    onClick={handleClick}
    className={styles}
    >
      <Icon name={title}/>
      <div className="ml-3 flex-1">{title.charAt(0).toUpperCase()+title.slice(1)}</div>
    </Link>

  )
}

// TODO make this scroll when you get too many projects
const ProjectsList = ({className}) => {
  const [ prompt ] = useAtom(promptAtom);
  return (
    <>
      <PanelSectionHeader title={PAGE.projects} url='projects'/>
      <div className='flex-1 px-2 pt-3'>
        <CreateNewProjectButton className='mb-4'/>
        { prompt &&
        <ProjectListItem prompt={prompt}/>
        }
      </div>
    </>
  )
}

const CreateNewProjectButton = ({className}) => {
  return (
    <div className={`py-2 px-4 text-green-800 transition-colors text-center border rounded-sm border-green-900 cursor-pointer hover:bg-green-800 hover:text-green-400 active:bg-green-900 active:text-green-600 select-none ${className}`}>
      + New Project
    </div>
  )
}

const ProjectListItem = ({className, prompt}) => {
  const [ isFetching ] = useAtom(isFetchingAtom);

  return (
    <div className={`text-green-500 px-2 py-4 flex flex-row items-center transition-colors hover:bg-green-800 hover:text-green-400 hover:border-green-900 active:bg-green-900 active:text-green-600 hover:cursor-pointer select-none border border-green-500 rounded-sm ${className}`}>
      <div className='mr-3'>
      { isFetching &&
        <SpinnerCircular size={20} thickness={100} speed={125} enabled={true} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
      }
      { !isFetching &&
        <CodeGlyph className='font-normal'/>
      }
      </div>

      <div>
        {prompt}
      </div>
    </div>
  )
}



