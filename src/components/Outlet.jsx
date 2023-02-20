import { useAtom } from 'jotai';
import { promptAtom, promptResponseAtom, isFetchingAtom } from '../atoms';
import GeneratorInput from './Generator';
import OutputCard from './OutputCard';
import { 
  AddOpenAICard, 
  AddMetaMaskCard,
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
      <GeneratorInput className='mb-6'/>
      { prompt &&
        <OutputCard/>
      }
      <OSSCard className='mt-6'/>
      <AddOpenAICard className='mt-4'/>
      <AddMetaMaskCard className='mt-4'/>
    </div>
  )
}
export default Outlet;
