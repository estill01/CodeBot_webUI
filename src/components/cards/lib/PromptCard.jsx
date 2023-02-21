import { useRef, forwardRef } from 'react';
import CloseButton from '../../utils/CloseButton';

const PromptCard = ({children, className, stateAtom, bottomText='Dismiss'}) => {
  const refCard = useRef(null);
  const refContent = useRef(null);

  return (
    <div 
    className={`border flex flex-col border-zinc-700 bg-zinc-900 rounded-md drop-shadow-lg min-h-[20rem] h-80 transition-all duration-500 ${className}`}
    ref={refCard}
    >
      <div className='pt-2 pr-2 absolute top-0 right-0'>
        <CloseButton 
          stateAtom={stateAtom} 
          refParent={refCard}
          refContent={refContent}
        />
      </div>

      <div 
        className='flex-1 flex flex-col items-center justify-center px-6 bg-yellow transition-opacity duration-200' 
        ref={refContent}
      >
        {children}
      </div>

      <div className='pb-4 transition-colors text-zinc-600 text-xs text-center hover:text-zinc-500 active:text-zinc-700 cursor-pointer select-none'>
        {bottomText}
      </div>
    </div>
  )
}
export default PromptCard;
