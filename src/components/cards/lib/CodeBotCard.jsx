import PromptCard from './PromptCard';
import {isVisibleOSSCardAtom} from '../../../atoms';
import Logo from '../../utils/Logo';
import CodeGlyph from '../../utils/CodeGlyph';
import { OpenInNewWindowIcon } from '@radix-ui/react-icons';

export const CodeBotCard = ({className}) => {
  return (
    <PromptCard className={className} stateAtom={isVisibleOSSCardAtom} closeText="Let's Rock">
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
            Proudly Decentralized & <span className='underline decoration-dotted decoration-1 decoration-slate-500 transition-colors hover:text-green-500 hover:decoration-emerald-500 hover:cursor-pointer active:text-green-700'>Open Source</span>
          </div>
        </div>
      </div>
    </PromptCard>
  )
}



          // <OpenInNewWindowIcon className='ml-[1em]' />

{/*        <div className='mt-4 flex flex-col items-center'>*/}
          {/*<div className='border border-green-500 text-sm py-1 px-3 rounded-md'>*/}
            {/*Neat. Let's Roll!*/}
          {/*</div>*/}
          {/*<div className='flex text-green-700 self-center text-sm mt-2'>*/}
            {/*Show me the code*/}
          {/*</div>*/}
        {/*</div>*/}


          // Contribute to the project on GitHub
