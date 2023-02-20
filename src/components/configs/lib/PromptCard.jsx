import CloseButton from '../../utils/CloseButton';

const PromptCard = ({children, className, stateAtom}) => {
  return (
    <div className={`border border-zinc-700 bg-zinc-900 rounded-md pb-6 drop-shadow-lg ${className}`}>
      <div className='pt-2 pr-2 grid justify-end'>
        <CloseButton stateAtom={stateAtom}/>
      </div>
      <div className='flex flex-col items-center justify-center px-6'>
        {children}
      </div>
    </div>
  )
}
export default PromptCard;
