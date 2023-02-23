import { Page } from './Page';
import { PAGE } from '../../../utils';


export const MarketplacePage = () => {
  return (
    <Page page={PAGE.marketplace}>
      <div className='bg-black w-full h-96'>
      </div>
    
      <div className='p-6'>

        <SectionHeader title="Featured Services"/>
        <div className='flex flex-row space-x-6 overflow-x-scroll'>
          <OpenAIServiceItem/> 
          <VertuaNetworkServiceItem/>
          <ServiceItem/> 
        </div>

        <SectionDivider/>

        <SectionHeader title="Help Train New Models"/>
        <div className='flex flex-row space-x-6 overflow-x-scroll'>
          <ServiceItem/> 
          <ServiceItem/> 
        </div>

        <SectionDivider/>

        <SectionHeader title="New Services"/>
        <div className='flex flex-row space-x-6 overflow-x-scroll'>
          <ServiceItem/> 
          <ServiceItem/> 
        </div>


      </div>
    </Page>
  );
}

const SectionDivider = ({className}) => {
  return (
    <div className={`my-10 ${className}`}>
      <div className={`w-full border border-t-0 border-zinc-900`}/>
      <div className={`w-full border border-b-0 border-zinc-700`}/>
    </div>
  )
}


const SectionHeader = ({ title, className}) => {
  return (
    <div className={`text-2xl font-black text-white mb-4 ${className}`}>
      {title}
    </div>
  )
}

const ServiceItem = ({className, bgcolor, logo, title, description}) => {
  return (
    <div className={`w-80 h-80 rounded-lg bg-zinc-300 drop-shadow-xl flex flex-col ${className}`}>
      <div className={`h-2/3 ${bgcolor || 'bg-zinc-500'} rounded-t-lg grid place-items-center drop-shadow-md border-b border-zinc-300`}>
        {logo}
      </div>

      <div className='flex-1'>
        <div className='text-zinc-800 text-xl font-bold py-2 px-3'>
          {title || 'Service Title'}
        </div>
        <div className='text-zinc-700 text-sm font-normal px-3 pb-2 align-top'>
          {description || 'Description'}
        </div>
      </div>

    </div>
  )
}



import { ReactComponent as OpenAIGlyph } from '../../../assets/openai.svg';
const OpenAIServiceItem = ({className}) => {
  return (
    <ServiceItem 
    bgcolor='bg-[#74aa9b]'
    logo={<OpenAIGlyph fill='white' className='h-28 w-28'/>}
    title='OpenAI Codex'
    description='Cutting-edge text-to-code generation capabilities'
    />
  )
}

import VertuaNetworkGlyph from '../../../assets/vertua_network.png';
const VertuaNetworkServiceItem = ({className}) => {
  return (
    <ServiceItem 
    bgcolor='bg-white'
    logo={<img src={VertuaNetworkGlyph} className='h-28 w-28'/>}
    title='Vertua Network'
    description='Source new capabilities on-demand'
    />
  )
}
