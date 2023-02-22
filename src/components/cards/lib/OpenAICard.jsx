import { useRef } from 'react';
import PromptCard from './PromptCard';
import { 
  isVisibleOpenAICardAtom,
  hasKeyOpenAIAtom,
  keyOpenAIAtom,
} from '../../../atoms';
import { OpenAIInsignia } from '../../utils';
import { KeyInputForm } from '../../forms';

import { useAtom } from 'jotai';

export const OpenAICard = ({className}) => {
  const refCard = useRef(null);
  return (
    <PromptCard 
    className={className} 
    ref={refCard}
    stateAtom={isVisibleOpenAICardAtom} 
    insignia={<OpenAIInsignia/>}
    text="Add Your OpenAI API Key To Get Started"
    subtext="Your key is not shared with anyone other than OpenAI"
    bottomText='Help me find my key!'
    >
      <KeyInputForm className='' hasKeyAtom={hasKeyOpenAIAtom} keyAtom={keyOpenAIAtom}/>
    </PromptCard>
  )
}

{/*      <div className='flex flex-col items-center mb-2'>*/}
        {/*<OpenAIInsignia className='mb-2'/>*/}
        {/*<div className='text-zinc-300 font-semibold'>*/}
          {/*Add Your OpenAI API Key To Get Started*/}
        {/*</div>*/}
        {/*<div className='text-sm text-zinc-400'>*/}
          {/*Your key is not shared with anyone other than OpenAI*/}
        {/*</div>*/}
      {/*</div>*/}

