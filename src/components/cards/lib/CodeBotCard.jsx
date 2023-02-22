import { useRef } from 'react';
import PromptCard from './PromptCard';
import {isVisibleCodeBotCardAtom} from '../../../atoms';
import { Logo, CodeGlyph } from '../../utils';

export const CodeBotCard = ({className}) => {
  const refCard = useRef(null);
  return (
    <PromptCard 
    className={className} 
    stateAtom={isVisibleCodeBotCardAtom} 
    bottomText="Read the code"
    ref={refCard}
    >
      <div className='flex flex-col items-center mt-2'>

    
        <div className='p-2 rounded-md bg-black border border-[#00f188] drop-shadow-lg select-none'>
          <div className='text-[#00f100] text-[2.5em]'>
            <span className='font-bold tracking-tight'>&lt;</span>
            <span className='font-light tracking-tight'>/</span>
            <span className='font-bold'>&gt;</span>
          </div>
        </div>

        <div className='mt-2 font-semibold text-xl items-center flex flex-col items-center'>
          <div>
            Code<span className='font-normal'>Bot</span> is AI to build complete software 
          </div>
          <div className='text-sm text-zinc-400 font-normal'>
            Proudly <span className='underline decoration-dotted decoration-1 decoration-slate-500 transition-colors hover:text-green-500 hover:decoration-emerald-500 hover:cursor-pointer active:text-green-700'>Open Source</span> & Decentralized
          </div>
        </div>
      </div>
    </PromptCard>
  )
}
