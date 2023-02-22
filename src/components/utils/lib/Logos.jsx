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


import { ReactComponent as OpenAIGlyph } from '../../../assets/openai.svg';
export const OpenAIInsignia = ({className, height='5', width='5'}) => {

  return (
    <div className={`rounded-lg bg-[#74aa9b] p-[0.5em] border border-emerald-800 shadow-sm ${className}`}>
      <OpenAIGlyph className={`h-${height} w-${width}`} fill='white'/>
    </div>
  )
}


