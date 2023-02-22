import { useRef, useState } from 'react';
import PromptCard from './PromptCard';
import { useAtom } from 'jotai';
import { 
  isVisibleOpenAICardAtom,
  hasKeyOpenAIAtom,
  keyOpenAIAtom,
} from '../../../atoms';
import { OpenAIInsignia } from '../../utils';
import { KeyInputForm } from '../../forms';

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
        <OpenAIInsignia className='mb-2'/>
        <div className='text-zinc-300 font-semibold'>
          Add Your OpenAI API Key To Get Started
        </div>
        <div className='text-sm text-zinc-400'>
          Your key is not shared with anyone other than OpenAI
        </div>
      </div>
      <KeyInputForm hasKeyAtom={hasKeyOpenAIAtom} keyAtom={keyOpenAIAtom}/>
    </PromptCard>
  )
}
