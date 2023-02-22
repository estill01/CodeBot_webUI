import { Page } from './Page';
import { useAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import { Icon } from '../../utils';
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
      <div className='mt-4 p-2 flex flex-col'>
        <ConnectedServices/>
      </div>
    </Page>
  );
}

const ConnectedServices = ({className}) => {
  return (
    <div className='flex flex-col'>
      <ConfigItemOpenAI/>
    </div>
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
    className={`mb-4 ${className}`}
    >
      {hasKeyOpenAI && 
        <code className='flex flex-row items-center'>
          <div className='mr-4'>
            {keyOpenAI}
          </div>
          <button className='text-blue-500' onClick={handleReset}>Clear</button>
        </code>
      }

      {!hasKeyOpenAI && 
        <div className='flex flex-col'>
          <KeyInputForm keyAtom={keyOpenAIAtom} hasKeyAtom={hasKeyOpenAIAtom}/>
          <div className='text-xs text-gray-500'>You can get your key <a href='https://beta.openai.com/account/api-keys' target='_blank' rel='noreferrer'>here</a></div>
        </div>
      }

    </ConfigItem>
  )
}

const ConfigItemVertuaNetwork = ({className}) => {
}


const KeyDisplay = ({className}) => {
  // **** - show key
}



const ConfigItem = ({className, label, status, children}) => {
  return (
    <div className={`flex flex-row items-start ${className}`}>
      <div className='mr-6 flex flex-row items-center'>
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
    {!status && <span className='ml-2 text-red-500'>✗</span>}
    </>
  )
}
