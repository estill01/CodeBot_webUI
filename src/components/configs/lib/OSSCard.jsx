import PromptCard from './PromptCard';
import {isVisibleOSSCardAtom} from '../../../atoms';
import Logo from '../../utils/Logo';
import CodeGlyph from '../../utils/CodeGlyph';

export const OSSCard = ({className}) => {
  return (
    <PromptCard className={className} stateAtom={isVisibleOSSCardAtom}>
      <div className='flex flex-col items-center mt-2'>

    
        <div className='p-2 rounded-md bg-black border border-[#00f188] drop-shadow-lg select-none'>
          <div className='text-[#00f100] text-[2.5em]'>
            <span className='font-bold tracking-tight'>&lt;</span>
            <span className='font-light tracking-tight'>/</span>
            <span className='font-bold'>&gt;</span>
          </div>
        </div>

        <div className='mt-2 font-semibold'>
          CodeBot is Open Source
        </div>
        <div className='text-sm text-zinc-400'>
          Contribute to the project on GitHub
        </div>
      </div>
    </PromptCard>
  )
}
