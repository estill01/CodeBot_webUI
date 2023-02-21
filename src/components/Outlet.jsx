import { useAtom } from 'jotai';
import { 
  promptAtom, 
  promptResponseAtom, 
  isFetchingAtom,
  isVisibleCodeBotCardAtom,
  isVisibleOpenAICardAtom,
  isVisibleMetaMaskCardAtom,
  hasKeyOpenAIAtom,
} from '../atoms';
import GeneratorInput from './Generator';
import OutputCard from './OutputCard';
import { 
  OpenAICard, 
  MetaMaskCard,
  CodeBotCard,
} from './cards';
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

  return (
    <div className={`flex-1 flex flex-col h-auto p-6 overflow-x-hidden ${className}`}>
      <GeneratorInput className='mb-4'/>

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
