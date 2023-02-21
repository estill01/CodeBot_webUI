import { useRef, useState } from 'react';
import PromptCard from './PromptCard';
import { useAtom } from 'jotai';
import { 
  isVisibleOpenAICardAtom,
  hasKeyOpenAIAtom,
  keyOpenAIAtom,
} from '../../../atoms';
import { ReactComponent as OpenAILogo } from '../../../assets/openai.svg';

export const OpenAICard = ({className}) => {
  const refCard = useRef(null);
  return (
    <PromptCard 
    className={className} 
    stateAtom={isVisibleOpenAICardAtom} 
    bottomText='Help me find my key!'
    ref={refCard}
    >
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
      <APIKeyInputForm refCard={refCard} />
    </PromptCard>
  )
}

const APIKeyInputForm = ({refCard, className}) => {
  const [keyOpenAI, setKeyOpenAI] = useAtom(keyOpenAIAtom);
  const [hasKeyOpenAI, setHasKeyOpenAI] = useAtom(hasKeyOpenAIAtom);
  const [hasInput, setHasInput] = useState(false);
  const refInput = useRef(null);
  const refThanks = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("refCard: ", refCard)
    console.log("API Key: ", refInput.current.value)

    setHasInput(true)
    setKeyOpenAI(refInput.current.value);
    setHasKeyOpenAI(true);

    setTimeout(() => {
      refCard.current.className = `h-[0rem] ${refCard.current.className}`;
      refCard.current.style.opacity = '0';
    }, 1000)

  }

  return (
    <>
    {!hasInput &&
    <form
    onSubmit={handleSubmit}
    className='flex flex-row items-center'
    >
      <input 
      className='flex-1 my-2 p-2 border rounded-md'
      placeholder='API key'
      ref={refInput}
      />
      <button 
      className='bg-emerald-600 text-white p-2 rounded-md ml-3 '
      >
        Add Key
      </button>
    </form>
    }

    {hasInput &&
    <div> 
      Nice! Let's Go!
    </div>
    }
    </>
  )
}




