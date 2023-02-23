import { useState } from 'react';
import { Page } from './Page';
import { useAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import { 
  Icon, 
  OpenAIInsignia,
  VertuaNetworkInsignia,
  MetaMaskInsignia,
  CodeBotInsignia,
  OpenAIKeyHelperText,
} from '../../utils';
import { PAGE } from '../../../utils';
import { hasKeyOpenAIAtom, keyOpenAIAtom } from '../../../atoms';
import { KeyInputForm } from '../../forms';

export const ConfigsPage = () => {
  return (
    <Page className='p-6' page={PAGE.configs}>
      <div className="flex flex-row items-center text-xl">
        <Icon name={PAGE.configs} className='mr-2 h-6 w-6' color='gray'/>
        <span className='font-semibold'>Configs</span>
      </div>
      <div className='mt-2 text-sm text-zinc-400'>
        All keys are stored on your computer and only used to interact with their respective services
      </div>
      <div className='mt-4 p-2 flex flex-col'>
        <ConnectedServices/>
      </div>
    </Page>
  );
}

const ConnectedServices = ({className}) => {
  return (
    <div className='flex flex-col'>
      <ConfigItemOpenAI className='mb-4'/>
      <ConfigItemVertuaNetwork className='mb-4'/>
      <ConfigItemMetaMask className='mb-4'/>
      <ConfigItemCodeBot className='mb-4'/>
    </div>
  )
}

const ConfigItem = ({className, logo, label, status, children}) => { return (
    <div className={`flex flex-row items-start ${className}`}>
      <div className='mr-6 flex flex-row items-center'>
        <div className='mr-4'>
          {logo}
        </div>
        <code>{label}</code>
        <StatusIndicator status={status}/>
      </div>
      {children}
    </div>
  )
}

const StatusIndicator = ({status}) => {
  return (
    <>
    {status && <span className='ml-2 text-green-500'>✓</span>}
    </>
  )
}

const KeyDisplay = ({className, apiKey}) => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className={`flex flex-row items-center ${className}`}>
      {isShowing &&
        <>
          <div className='mr-2'>{apiKey}</div>
          <button className='text-yellow-500 p-0 bg-transparent mr-4' onClick={() => setIsShowing(false)}>Hide</button>
        </>
      }
        
      {!isShowing &&
        <>
          <code className='mr-4'>********</code>
          <button className='text-blue-500 p-0 bg-transparent mr-4' onClick={() => setIsShowing(true)}>Show</button>
        </>
      }
    </div>
  )
}

const ConfigItemCodeBot = ({className}) => {
  const [ hasKeyOpenAI, setHasKeyOpenAI ] = useAtom(hasKeyOpenAIAtom);
  return (
    <ConfigItem 
    label='CodeBot'
    status={hasKeyOpenAI}
    logo={<CodeBotInsignia size='small'/>}
    className={className}
    />
  )
}

const ConfigItemMetaMask = ({className}) => {
  const [ hasKeyOpenAI, setHasKeyOpenAI ] = useAtom(hasKeyOpenAIAtom);
  return (
    <ConfigItem 
    label='MetaMask Connected'
    status={hasKeyOpenAI}
    logo={<MetaMaskInsignia size='small'/>}
    className={className}
    />
  )
}


const ConfigItemVertuaNetwork = ({className}) => {
  const [ hasKeyOpenAI, setHasKeyOpenAI ] = useAtom(hasKeyOpenAIAtom);
  return (
    <ConfigItem 
    label='Vertua Network Account'
    status={hasKeyOpenAI}
    logo={<VertuaNetworkInsignia size='small'/>}
    className={className}
    />
  )
}

const ConfigItemOpenAI = ({className}) => {
  const [ hasKeyOpenAI, setHasKeyOpenAI ] = useAtom(hasKeyOpenAIAtom);
  const [ keyOpenAI, setKeyOpenAI ] = useAtom(keyOpenAIAtom);

  const handleReset = () => {
    setKeyOpenAI(RESET);
    setHasKeyOpenAI(false);
  }

  return (
    <ConfigItem 
    label='OpenAI API Key'
    status={hasKeyOpenAI}
    logo={<OpenAIInsignia size='small'/>}
    className={className}
    >
      {hasKeyOpenAI && 
        <>
          <code className='mr-4'>
            <KeyDisplay apiKey={keyOpenAI}/>
          </code>
          <button className='text-red-500 p-0 bg-transparent' onClick={handleReset}>Clear</button>
        </>
      }

      {!hasKeyOpenAI && 
        <div className='flex flex-col'>
          <KeyInputForm keyAtom={keyOpenAIAtom} hasKeyAtom={hasKeyOpenAIAtom}/>
          <OpenAIKeyHelperText className='mt-1.5'/>
        </div>
      }
    </ConfigItem>
  )
}



