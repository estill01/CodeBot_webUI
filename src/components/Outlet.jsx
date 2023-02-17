import { SpinnerCircular } from 'spinners-react';
import { useAtom } from 'jotai';
import { promptAtom, promptResponseAtom, isFetchingAtom } from '../atoms';

const Outlet = (props) => {
  // const store = useStore();
  // approach 1: subscribe to the store
  // approach 2: useAtom the atom..

  const [ isFetching ] = useAtom(isFetchingAtom);
  const [ promptResponse, _ ]= useAtom(promptResponseAtom);
  const [ prompt, setPrompt ] = useAtom(promptAtom);

  return (
    <div className="flex flex-col items-center justify-center h-full px-4">
      <div className='font-mono'>
        { isFetching &&
          <SpinnerCircular size={50} thickness={100} speed={125} enabled={true} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
        }
        { !isFetching && promptResponse &&
            <div className='mb-4 text-green-500 fixed bg-slate-900'>
              "{prompt}":
            </div>
        }
        { !isFetching && promptResponse !== '' &&
          <div className='text-sm mt-8'>
            { promptResponse }
          </div>
        }
      </div>
    </div>
  )
}
export default Outlet;

