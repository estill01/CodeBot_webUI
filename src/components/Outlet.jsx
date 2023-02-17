import { SpinnerCircular } from 'spinners-react';

const Outlet = (props) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className='font-mono'>
        <SpinnerCircular size={50} thickness={100} speed={125} enabled={false} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
      </div>
    </div>
  )
}
export default Outlet;

