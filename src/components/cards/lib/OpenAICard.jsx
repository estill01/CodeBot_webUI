import { useRef } from 'react';
import PromptCard from './PromptCard';
import { useAtom } from 'jotai';
import { 
  isVisibleOpenAICardAtom,
  hasKeyOpenAIAtom,
  keyOpenAIAtom,
} from '../../../atoms';
import { ReactComponent as OpenAILogo } from '../../../assets/openai.svg';


export const OpenAICard = ({className}) => {
  const refInput = useRef(null);
  let refCard
//  const refCard = useRef(null);
  // const refCard = createRef();

  const [keyOpenAI, setKeyOpenAI] = useAtom(keyOpenAIAtom);
  const [hasKeyOpenAI, setHasKeyOpenAI] = useAtom(hasKeyOpenAIAtom);

  // TODO - cardRef / ref to the containg card is null, so can't (yet) do style update to do fade effect when you input your API key
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("refCard: ", refCard)



    // console.log("API Key: ", refInput.current.value)
    setKeyOpenAI(refInput.current.value);
    // maybe do a switch to a 'thanks' card or something...
    setHasKeyOpenAI(true);




    // TODO should fade out the element

    // console.log("SUBMIT - refSelf.current")
    // console.log(refCard)
    // this.className = `h-[0em] ${this.className}`;
    // this.style.opacity = '0';

  }

  return (
    <>
    <PromptCard 
    className={className} 
    stateAtom={isVisibleOpenAICardAtom} 
    bottomText='Help me find my key!'
    ref={(e) => { 
      console.log("card ref: ", e)
      refCard = e 
    }}
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

      <form
        onSubmit={handleSubmit}
        className='flex flex-row items-center w-2/5'
      >
        <input 
        className='flex-1 my-2 p-2 border rounded-md'
        placeholder='API key'
        ref={refInput}
        />
        <button 
        className='bg-emerald-600 text-white p-2 rounded-md ml-3'>
          Add Key
        </button>
      </form>
    
    </PromptCard>
    </>
  )
}
