import { useAtom } from 'jotai';
import { promptAtom, promptResponseAtom, isFetchingAtom } from '../../../atoms';
import MetaMaskLogo from '../../../assets/metamask-fox.svg';
import PromptCard from './PromptCard';

export const AddMetaMaskCard = ({className}) => {
  return (
    <PromptCard className={className}>
      <div className='flex flex-col items-center mb-2'>
        <img src={MetaMaskLogo} className='w-16 h-16' />
        <div className='text-zinc-300'>
          Connect MetaMask
        </div>
      </div>
    </PromptCard>
  )
}

