import PromptCard from './PromptCard';
import { isVisibleOpenAICardAtom } from '../../../atoms';
import { ReactComponent as OpenAILogo } from '../../../assets/openai.svg';

export const OpenAICard = ({className}) => {
  return (
    <PromptCard className={className} stateAtom={isVisibleOpenAICardAtom}>
      <div className='flex flex-col items-center mb-2'>
        <div className='rounded-lg bg-[#74aa9b] p-[0.5em] mb-2 border border-emerald-800 shadow-sm'>
          <OpenAILogo className='w-16 h-16' fill='white'/>
        </div>
        <div className='text-zinc-300 font-semibold'>
          Add Your OpenAI API Key To Get Started
        </div>
        <div className='text-sm text-zinc-400'>
          Your key is not shared with anyone other than OpenAI
        </div>
      </div>

      <input 
      className='my-2 p-2 border rounded-md'
      placeholder='API key'
      />
    </PromptCard>
  )
}
