import { useAtom } from 'jotai';
import { 
  promptAtom, 
  promptResponseAtom, 
  isFetchingAtom,
  isVisibleCodeBotCardAtom,
  isVisibleOpenAICardAtom,
  isVisibleMetaMaskCardAtom,
  hasKeyOpenAIAtom,
  keyOpenAIAtom,
} from '../../atoms';
import GeneratorBar from './GeneratorBar';
import { 
  OpenAICard, 
  MetaMaskCard,
  CodeBotCard,
  OutputCard,
} from '../cards';
// import Terminal from './Terminal';

// TODO Refactor - Iterate stored prompts/responses
const Outlet = ({className}) => {
  const [ isFetching ] = useAtom(isFetchingAtom);
  const [ promptResponse, _ ]= useAtom(promptResponseAtom);
  const [ prompt, setPrompt ] = useAtom(promptAtom);
  const [ isVisibleCodeBotCard ] = useAtom(isVisibleCodeBotCardAtom);
  const [ isVisibleOpenAICard ] = useAtom(isVisibleOpenAICardAtom);
  const [ hasKeyOpenAI ] = useAtom(hasKeyOpenAIAtom);
  const [ isVisibleMetaMaskCard ] = useAtom(isVisibleMetaMaskCardAtom);

  const [ keyOpenAI ] = useAtom(keyOpenAIAtom);

  return (
    <div className={`flex-1 flex flex-col h-auto p-6 overflow-x-hidden ${className}`}>
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
export default Outlet;
