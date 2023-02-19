import { useAtom } from 'jotai';
import { promptAtom, promptResponseAtom, isFetchingAtom } from '../atoms';
import GeneratorInput from './Generator';
import OutputCard from './OutputCard';




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
    </div>
  )
}
export default Outlet;
