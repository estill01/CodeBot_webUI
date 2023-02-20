export const OSSCard = ({className}) => {
  return (
    <PromptCard className={className}>
      <div className='flex flex-col items-center mt-2'>
        <div className=''>
          CodeBot is Open Source
        </div>
        <div className='text-sm text-zinc-400'>
          Don't Trust. Verify. 
        </div>
      </div>
    </PromptCard>
  )
}

const PromptCard = ({children, className}) => {
  return (
    <div className={`flex flex-col items-center justify-center border border-zinc-700 bg-zinc-900 rounded-md p-6 drop-shadow-lg ${className}`}>
      {children}
    </div>
  )
}
export default PromptCard;
