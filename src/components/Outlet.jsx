import { useAtom } from 'jotai';
import { promptAtom, promptResponseAtom, isFetchingAtom } from '../atoms';
import GeneratorInput from './Generator';
import OutputCard from './OutputCard';
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
      <AddAPIKey className='mt-6'/>
    </div>
  )
}
export default Outlet;

const AddAPIKey = ({className}) => {
  return (
    <div className={`flex flex-col items-center justify-center border border-zinc-700 bg-zinc-900 rounded-md p-6 drop-shadow-lg ${className}`}>

      <div className='flex flex-col items-center mb-2'>
        <div className='text-zinc-300'>
          Add Your OpenAI API Key To Get Started
        </div>
        <div className='text-sm text-zinc-400'>
          Your key is not shared with anyone other than OpenAI
        </div>
      </div>

      <input 
      className='my-2 p-2 border rounded-md'
      placeholder='API key'
      />

      <div className='flex flex-col items-center mt-2'>
        <div className='text-xs'>
          CodeBot is Open Source
        </div>
        <div className='text-xs text-zinc-400'>
          Don't Trust. Verify. 
        </div>

      </div>

    </div>
  )
}



