import { useRef } from 'react';
import PromptCard from './PromptCard';
import {isVisibleCodeBotCardAtom} from '../../../atoms';
import { CodeBotInsignia} from '../../utils';

export const CodeBotCard = ({className}) => {
  const refCard = useRef(null);
  const text=<div className='flex flex-row'>Code<span className='font-light mr-1.5'>Bot</span> is AI to build complete software</div>;
  const subText = <>Proudly <span className='underline decoration-dotted decoration-1 decoration-slate-500 transition-colors hover:text-green-500 hover:decoration-emerald-500 hover:cursor-pointer active:text-green-700'>Open Source</span> & Decentralized</>;
  return (
    <PromptCard 
    className={className} 
    ref={refCard}
    size='large'
    stateAtom={isVisibleCodeBotCardAtom} 
    insignia={<CodeBotInsignia/>}
    text={text}
    textSize='text-2xl'
    subtext={subText}
    bottomText="Read the code"
    />
  )
}



