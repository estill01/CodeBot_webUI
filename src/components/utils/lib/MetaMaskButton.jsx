import MetaMaskLogo from '../../../assets/metamask-fox.svg';

export const ConnectMetaMaskButton = ({className}) => {
  return (
    <div className={`flex flex-row transition-colors place-content-center items-center bg-slate-100 text-zinc-500 hover:bg-white hover:text-zinc-600 active:bg-slate-200 active:text-zinc-600 select-none rounded-lg py-1 px-2 border border-slate-400 hover:cursor-pointer text-sm ${className}`}>
      <img src={MetaMaskLogo} className='w-6 h-6 mr-2'/>
      <div className=''>Connect With MetaMask</div>
    </div>
  )
}



