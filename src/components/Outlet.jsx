import { SpinnerCircular } from 'spinners-react';
import { useAtom } from 'jotai';
import { atomWithObservable } from 'jotai/utils';
import { promptAtom, promptResponseAtom, isFetchingAtom } from '../atoms';
import { lowlight } from 'lowlight';

// TODO Refactor - Iterate stored prompts/responses
const Outlet = (props) => {
  const [ isFetching ] = useAtom(isFetchingAtom);
  const [ promptResponse, _ ]= useAtom(promptResponseAtom);
  const [ prompt, setPrompt ] = useAtom(promptAtom);

  return (
    <div className="flex flex-col h-auto p-6 overflow-x-hidden">
      { prompt &&
        <OutputCard/>
      }
    </div>
  )
}
export default Outlet;


const OutputCard = ({className}) => {
  const [ isFetching ] = useAtom(isFetchingAtom);
  const [ promptResponse, _ ]= useAtom(promptResponseAtom);
  const [ prompt, setPrompt ] = useAtom(promptAtom);

  return (
    <div className='border border-transparent transition-colors hover:border-emerald-700 rounded-lg drop-shadow-lg font-mono'>
      { prompt && 
        <div className='text-green-500 bg-slate-900 p-2 flex flex-row rounded-t-lg'>
          <span className='tracking-[-0.15em] font-extrabold mr-4'>&lt;/&gt;</span>
          <div>
            {prompt}
          </div>
        </div>
      }

      <CodeOutput/>

    </div>
  )
}


   
const CodeOutput = ({className}) => {
  console.log("## CodeOutput")
  const [ isFetching ] = useAtom(isFetchingAtom);
  const [ promptResponse ]= useAtom(promptResponseAtom);

  // TODO Get the language detector to run...
  const promptAtomObserver = atomWithObservable(() => {
    console.log("## promptAtomObserver")
    let lang = lowlight.highlightAuto(promptResponse);
    console.log("detected lang:", lang)
  });

  return (
    <div className="text-sm p-4 bg-black bg-gradient-to-bl from-[#ffffff1a] to-transparent rounded-b-lg">
      { isFetching &&
        <SpinnerCircular size={50} thickness={100} speed={125} enabled={true} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" className='justify-center self-center'/>
      }

      { !isFetching && promptResponse !== '' &&
        <pre className='whitespace-pre-wrap'>
          <code>
            {promptResponse}
          </code>
        </pre>
      }
    </div>
  )
}

// lowlight.highlightAuto(promptResponse) 
{/*  let lang = '' */}
  {/*if (!isFetching && promptResponse !== '') {*/}
    {/*lang = detectLanguage(promptResponse).data.language*/}
    {/*console.log("Got lang:", lang)*/}
  {/*}*/}



