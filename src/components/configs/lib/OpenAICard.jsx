import PromptCard from './PromptCard';
import { 
  isVisibleOpenAICardAtom,
  hasKeyOpenAIAtom,
  keyOpenAIAtom,
} from '../../../atoms';
import { ReactComponent as OpenAILogo } from '../../../assets/openai.svg';

export const OpenAICard = ({className}) => {
  return (
    <PromptCard className={className} stateAtom={isVisibleOpenAICardAtom} closeText='Help me find my key!'>
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

      <div className='flex flex-row items-center w-2/5'>
      <input 
      className='flex-1 my-2 p-2 border rounded-md'
      placeholder='API key'
      />
      <button className='bg-emerald-600 text-white p-2 rounded-md ml-3'>
        Add Key
      </button>
      </div>
    </PromptCard>
  )
}
