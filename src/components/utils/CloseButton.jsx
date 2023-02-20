import { useAtom } from 'jotai';

const CloseButton = ({className, stateAtom}) => {
  const [state, setState] = useAtom(stateAtom);

  return (
    <div 
    className={`grid place-content-center text-lg text-zinc-700 h-6 w-6 border border-zinc-800 rounded-sm transition-colors hover:bg-zinc-800 hover:text-zinc-600 hover:cursor-pointer active:bg-zinc-900 active:text-zinc-800 select-none ${className}`}
    onClick={() => {
      console.log("clicked CloseButton");
      console.log("state atom: ", stateAtom);
      console.log("state - was: ", state);
      setState(false)
      console.log("state - now: ", state);
    }}
    >
      <code className='leading-6 font-mono text-center mb-[0.1em]'>x</code>
    </div>
  )
}
export default CloseButton;
