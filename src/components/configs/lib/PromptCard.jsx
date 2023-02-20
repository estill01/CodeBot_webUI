import CloseButton from '../../utils/CloseButton';

const PromptCard = ({children, className, stateAtom, closeText='Dismiss'}) => {
  return (
    <div className={`border border-zinc-700 bg-zinc-900 rounded-md drop-shadow-lg ${className}`}>
      <div className='pt-2 pr-2 grid justify-end'>
        <CloseButton stateAtom={stateAtom}/>
      </div>

      <div className='flex flex-col items-center justify-center px-6'>
        {children}
      </div>

      <div className='align-middle pt-5 pb-4 transition-colors text-zinc-600 text-xs text-center hover:text-zinc-500 active:text-zinc-700 cursor-pointer select-none'>
        {closeText}
      </div>
    </div>
  )
}
export default PromptCard;
