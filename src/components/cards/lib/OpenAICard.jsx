import { useRef } from 'react';
import PromptCard from './PromptCard';
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
    ref={refCard}
    size='large'
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
