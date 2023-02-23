import { useRef } from 'react';
import PromptCard from './PromptCard';
import { isVisibleMetaMaskCardAtom } from '../../../atoms';
import { 
  VertuaNetworkInsignia, 
  ConnectMetaMaskButton,
} from '../../utils'
import MetaMaskLogo from '../../../assets/metamask-fox.svg';

export const MetaMaskCard = ({className}) => {
  const refCard = useRef(null);
  console.log("MetaMaskCard, state atom: ", isVisibleMetaMaskCardAtom);
  return (
    <PromptCard 
    className={className} 
    ref={refCard}
    size='large'
    stateAtom={isVisibleMetaMaskCardAtom} 
    insignia={<VertuaNetworkInsignia/>}
    text='Boost Performance With Vertua Market'
    subtext='Integrate new AI capabilities, and sell what you create'
    bottomText="What's Vertua?"
    >
      <ConnectMetaMaskButton className='mt-4'/>
    </PromptCard>
  )
}

