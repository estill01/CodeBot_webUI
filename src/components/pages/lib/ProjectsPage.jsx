import { useAtom } from 'jotai';
import { Page } from './Page';
import { 
  promptAtom, 
  isVisibleCodeBotCardAtom,
  isVisibleOpenAICardAtom,
  isVisibleMetaMaskCardAtom,
  hasKeyOpenAIAtom,
} from '../../../atoms';
import GeneratorBar from '../../core/GeneratorBar';
import { 
  OpenAICard, 
  MetaMaskCard,
  CodeBotCard,
  OutputCard,
} from '../../cards';

// TODO Refactor - Iterate stored prompts/responses
export const ProjectsPage = ({className}) => {
  const [ prompt ] = useAtom(promptAtom);
  const [ isVisibleCodeBotCard ] = useAtom(isVisibleCodeBotCardAtom);
  const [ isVisibleOpenAICard ] = useAtom(isVisibleOpenAICardAtom);
  const [ isVisibleMetaMaskCard ] = useAtom(isVisibleMetaMaskCardAtom);
  const [ hasKeyOpenAI ] = useAtom(hasKeyOpenAIAtom);
  return (
    <div className='p-6'>
      <GeneratorBar className='mb-4'/>

      { prompt &&
        <OutputCard/>
      }

      { isVisibleCodeBotCard &&
        <CodeBotCard className='mt-4'/>
      }

      { isVisibleOpenAICard && !hasKeyOpenAI &&
        <OpenAICard className='mt-4'/>
      }

      { isVisibleMetaMaskCard &&
        <MetaMaskCard className='mt-4'/>
      }

    </div>
  )
}
