import { ReactComponent as OpenAIGlyph } from '../../../assets/openai.svg';
import VertuaNetworkGlyph from '../../../assets/vertua_network.png';
import { ReactComponent as MetaMaskGlyph } from '../../../assets/metamask-fox.svg';


// -- GENERIC --
export const Insignia = ({className, size="medium", logo, bgcolor="bg-white", border, children}) => {
  const Glyph = Glyphs(logo, size)
  size = BoxSizes(size)
  return (
    <div className={`rounded-md ${bgcolor} border ${border} drop-shadow-lg select-none grid place-content-center ${size} ${className}`}>
      <Glyph/> 
    </div>
  )
}

const BoxSizes = (size) => {
  switch (size) {
    case 'small':
      return 'w-9 h-9 p-1';
    case 'medium':
      return 'w-16 h-16 p-2';
    case 'large':
      return 'w-20 h-20 p-2';
    default:
      return 'w-16 h-16 p-2';
  }
}

const LogoSizes = (size) => {
  switch (size) {
    case 'small':
      return 'w-6 h-6';
    case 'medium':
      return 'w-12 h-12';
    case 'large':
      return 'w-16 h-16';
    default:
      return 'w-12 h-12';
  }
}

const FontSizes = (size) => {
  switch (size) {
    case 'small':
      return 'text-xs';
    case 'medium':
      return 'text-base';
    case 'large':
      return 'text-4xl';
    default:
      return 'text-base';
  }
}

const Glyphs = (name, size) => {
  switch (name) {
    case 'openai':
      size = LogoSizes(size)
      return () => <OpenAIGlyph fill='white' className={size}/>
    case 'vertua':
      size = LogoSizes(size)
      return () => <img src={VertuaNetworkGlyph} className={size}/>
    case 'metamask':
      size = LogoSizes(size)
      return () => <MetaMaskGlyph className={size} />
    case 'codebot':
      return () => <CodeBotGlyph size={size}/>
    default:
      size = LogoSizes(size)
      return () => <img src={VertuaNetworkLogo} className={size}/>
  }
}


// -- CodeBot -- 

export const CodeBotGlyph = ({className, size}) => {
  size = FontSizes(size)
  return (
    <div className={`text-[#00f100] font-bold tracking-[-0.05em] ${size} ${className}`}>
      &lt;<span className='font-normal'>/</span>&gt;
    </div>
  )
}

export const CodeBotLogo = ({className}) => {
  return (
    <div className={`flex flex-row content-center text-xl ${className}`}>
      <CodeBotGlyph className='mr-1.5 mt-[0.05em]'/>
      <div className='my-auto font-semibold'>Code<span className='font-normal'>Bot</span></div>
    </div>
  )
}

export const CodeBotInsignia = ({className, size='medium'}) => {
  return (
    <Insignia
    className={className}
    size={size}
    bgcolor='bg-black'
    border='border-[#00f188]'
    logo='codebot'
    />
  )
}

{/*    <div className='p-2 rounded-md bg-black border border-[#00f188] drop-shadow-lg select-none'>*/}
      {/*<CodeBotGlyph/>*/}
      {/*<div className='text-[#00f100] text-[2.5em]'>*/}
        {/*<span className='font-bold tracking-tight'>&lt;</span>*/}
        {/*<span className='font-light tracking-tight'>/</span>*/}
        {/*<span className='font-bold'>&gt;</span>*/}
      {/*</div>*/}
    {/*</div>*/}



// export const CodeBotGlyph = () => {
// }



// -- OpenAI -- 
export const OpenAIInsignia = ({className, size='medium'}) => {
  return (
    <Insignia 
    className={className}
    size={size} 
    bgcolor="bg-[#74aa9b]" 
    border="border-emerald-800"
    logo='openai'
    />
  )

}

// -- Vertua Network -- 
export const VertuaNetworkInsignia = ({className, size='medium'}) => {
  return (
    <Insignia 
    className={className}
    size={size} 
    bgcolor="bg-white" 
    border="border-slate-400"
    logo='vertua'
    />
  )
}

// -- MetaMask --
export const MetaMaskInsignia = ({className, size='medium'}) => {
  return (
    <Insignia 
    className={className}
    size={size} 
    bgcolor="bg-white" 
    border="border-slate-400"
    logo='metamask'
    />
  )
}
