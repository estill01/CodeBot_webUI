
// -- CodeBot -- 
// export const CodeBotGlyph = () => {
// }

export const CodeBotLogo = ({className}) => {
  return (
    <div className={`flex flex-row content-center text-xl ${className}`}>
      <div className='my-auto mr-[0.25em] text-[#00f100] font-medium tracking-[-0.1em]'>
        &lt;/&gt;
      </div>
      <div className='my-auto font-semibold'>Code<span className='font-normal'>Bot</span></div>
    </div>
  )
}

export const CodeBotInsignia = ({className}) => {
  return (
    <div className='p-2 rounded-md bg-black border border-[#00f188] drop-shadow-lg select-none'>
      <div className='text-[#00f100] text-[2.5em]'>
        <span className='font-bold tracking-tight'>&lt;</span>
        <span className='font-light tracking-tight'>/</span>
        <span className='font-bold'>&gt;</span>
      </div>
    </div>
  )
}


// -- OpenAI -- 
import { ReactComponent as OpenAIGlyph } from '../../../assets/openai.svg';
export const OpenAIInsignia = ({className, size='medium'}) => {

  let imageSize=''
  switch (size) {
    case 'small':
      imageSize = 'w-6 h-6'
      break;
    case 'medium':
      imageSize = 'w-16 h-16'
      break;
    default:
      imageSize = 'w-12 h-12'
  }

  return (
    <Insignia className='bg-[#74aa9b]' size={size} color="bg-[#74aa9b]" border="border-emerald-800">
      <OpenAIGlyph className={`${imageSize}`} fill='white'/>
    </Insignia>
  )
}

//    <div className={`rounded-lg bg-[#74aa9b] p-[0.5em] border border-emerald-800 shadow-sm ${className}`}>
//   </div>


// TODO do small, medium, large, etc. versions
export const Insignia = ({className, height='8', width='8', color, border, children}) => {
  return (
    <div className={`p-2 rounded-md h-[${height}] w-[${width}] ${color} border ${border} drop-shadow-lg select-none`}>
      {children}
    </div>
  )
}


// -- Vertua Network -- 
import VertuaNetworkLogo from '../../../assets/vertua_network.png';
export const VertuaNetworkInsignia = ({className, size='medium', height='5', width='5'}) => {
  // TODO do small, medium, large, etc. versions

  return (
    <div className={`p-2 bg-white rounded-md border border-slate-400 drop-shadow-xl ${className}`}>
      <img src={VertuaNetworkLogo} alt='Vertua Network Logo' className={`w-${width} h-${height}`} />
    </div>
  )
}

// -- MetaMask --
import { ReactComponent as MetaMaskLogo } from '../../../assets/metamask-fox.svg';
export const MetaMaskInsignia = ({className, size='medium', height='5', width='5'}) => {
  // TODO do small, medium, large, etc. versions

  return (
    <div className={`p-2 bg-white rounded-md border border-slate-400 drop-shadow-xl ${className}`}>
      <MetaMaskLogo className={`w-${width} h-${height}`} />
    </div>
  )
}
