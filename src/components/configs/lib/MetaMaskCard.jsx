import PromptCard from './PromptCard';
import { isVisibleMetaMaskCardAtom } from '../../../atoms';
import MetaMaskLogo from '../../../assets/metamask-fox.svg';

export const MetaMaskCard = ({className}) => {
  console.log("MetaMaskCard, state atom: ", isVisibleMetaMaskCardAtom);
  return (
    <PromptCard className={className} stateAtom={isVisibleMetaMaskCardAtom}>
      <div className='flex flex-col items-center mb-2'>
        <img src={MetaMaskLogo} className='w-16 h-16' />
        <div className='text-zinc-300'>
          Connect MetaMask
        </div>
      </div>
    </PromptCard>
  )
}

