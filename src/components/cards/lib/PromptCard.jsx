import { cloneElement } from 'react';
import { useRef, forwardRef } from 'react';
import { CloseButton } from '../../utils';

const PromptCard = forwardRef((props, ref) => {
  const {
    className, 
    stateAtom, 
    insignia, 
    text,
    subtext,
    bottomText='Dismiss', 
    size,
    textSize,
    children, 
  } = props;
  const refContent = useRef(null);

  const clonedInsignia = cloneElement(insignia, { size: size });

  let _textSize = textSize
  if (!_textSize) {
    size == 'large' ? _textSize = 'text-lg' : _textSize = 'text-base';
  }

  return (
    <div 
    className={`border flex flex-col border-zinc-700 bg-zinc-900 rounded-md drop-shadow-lg min-h-[20rem] h-[20rem] transition-all duration-500 ${className}`}
    ref={ref}
    >
      <div className='pt-2 pr-2 absolute top-0 right-0'>
        <CloseButton 
          stateAtom={stateAtom} 
          refParent={ref}
          refContent={refContent}
        />
      </div>

      <div 
        className='flex-1 flex flex-col items-center justify-center px-6 transition-opacity duration-200' 
        ref={refContent}
      >
        {clonedInsignia}
        <div className={`mt-3 font-semibold items-center flex flex-col items-center ${_textSize}`}>
          {text}
        </div>
        <div className='text-sm text-zinc-400 font-normal'>
          {subtext}
        </div>
        { children ? <div className='mt-4'>{children}</div> : null }
      </div>

      <div className='pb-4 transition-colors text-zinc-600 text-xs text-center hover:text-zinc-500 active:text-zinc-700 select-none'>
        <span className='cursor-pointer'>{bottomText}</span>
      </div>
    </div>
  )
})
export default PromptCard;
