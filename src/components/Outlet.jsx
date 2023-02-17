import { SpinnerCircular } from 'spinners-react';
import { useAtom } from 'jotai';
import { promptAtom } from '../atoms';

const Outlet = (props) => {
  // const store = useStore();
  // approach 1: subscribe to the store
  // approach 2: useAtom the atom..

  const [ prompt, _ ]= useAtom(promptAtom);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className='font-mono'>
        <SpinnerCircular size={50} thickness={100} speed={125} enabled={false} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
        { prompt !== '' &&
          <div>
            { prompt }
          </div>
        }
      </div>
    </div>
  )
}
export default Outlet;

