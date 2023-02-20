import { useAtom } from 'jotai';
import { 
  promptAtom, 
  promptResponseAtom, 
  isFetchingAtom,
  isVisibleOSSCardAtom,
  isVisibleOpenAICardAtom,
  isVisibleMetaMaskCardAtom,
} from '../atoms';
import GeneratorInput from './Generator';
import OutputCard from './OutputCard';
import { 
  OpenAICard, 
  MetaMaskCard,
  OSSCard,
} from './configs';
// import Terminal from './Terminal';

// TODO Refactor - Iterate stored prompts/responses
const Outlet = ({className}) => {
  const [ isFetching ] = useAtom(isFetchingAtom);
  const [ promptResponse, _ ]= useAtom(promptResponseAtom);
  const [ prompt, setPrompt ] = useAtom(promptAtom);

  return (
    <div className={`flex-1 flex flex-col h-auto p-6 overflow-x-hidden ${className}`}>
      <GeneratorInput className='mb-4'/>

      { prompt &&
        <OutputCard/>
      }

      { isVisibleOSSCardAtom &&
        <OSSCard className='mt-6'/>
      }

      { isVisibleOpenAICardAtom &&
        <OpenAICard className='mt-4'/>
      }

      { isVisibleMetaMaskCardAtom &&
        <MetaMaskCard className='mt-4'/>
      }

    </div>
  )
}
export default Outlet;
