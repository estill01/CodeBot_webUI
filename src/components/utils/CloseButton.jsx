import { useAtom } from 'jotai';

const CloseButton = ({className, refParent, refContent, stateAtom}) => {
  const [state, setState] = useAtom(stateAtom);

  return (
    <div 
    className={`grid place-content-center text-lg text-zinc-700 h-6 w-6 border border-zinc-800 rounded-sm transition-colors hover:bg-zinc-800 hover:text-zinc-600 hover:cursor-pointer active:bg-zinc-900 active:text-zinc-800 select-none ${className}`}
    onClick={() => {
      console.log("clicked CloseButton");
      console.log("refParent: ", refParent);
      console.log("refParent.current: ", refParent.current);

      refContent.current.style.opacity = '0';

      refParent.current.className = `h-[0rem] min-h-[0rem] ${refParent.current.className}`;
      refParent.current.style.opacity = '0';
      refParent.current.style.marginTop= '0';
    }}
    >
      <code className='leading-6 font-mono text-center mb-[0.1em]'>x</code>
    </div>
  )
}
export default CloseButton;
