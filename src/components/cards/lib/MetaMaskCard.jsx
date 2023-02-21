import { useRef } from 'react';
import PromptCard from './PromptCard';
import { isVisibleMetaMaskCardAtom } from '../../../atoms';
import MetaMaskLogo from '../../../assets/metamask-fox.svg';
import VertuaNetworkLogo from '../../../assets/vertua_network.png';

export const MetaMaskCard = ({className}) => {
  const refCard = useRef(null);
  console.log("MetaMaskCard, state atom: ", isVisibleMetaMaskCardAtom);
  return (
    <PromptCard 
    className={className} 
    stateAtom={isVisibleMetaMaskCardAtom} 
    bottomText="What's Vertua?"
    ref={refCard}
    >

      <div className='flex flex-col items-center justify-center mb-2'>
        <div className='p-2 bg-white rounded-md border border-slate-400 drop-shadow-xl'>
          <img src={VertuaNetworkLogo} alt='Vertua Network Logo' className='w-16 h-16' />
        </div>
    
        <div className='font-semibold text-center mt-2'>
          Boost Performance With Vertua Market 
        </div>
        <div className='text-sm text-zinc-400'>
          Integrate new AI capabilities, and sell what you create
        </div>
      </div>

      <div className='mt-2 flex flex-row transition-colors bg-slate-100 text-zinc-500 hover:bg-white hover:text-zinc-600 active:bg-slate-200 active:text-zinc-600 select-none rounded-lg items-center py-1 px-2 border border-slate-400 hover:cursor-pointer text-sm'>
        <img src={MetaMaskLogo} className='w-6 h-6 mr-2'/>
        <div className=''>
          Connect With MetaMask
        </div>
      </div>

    </PromptCard>
  )
}

