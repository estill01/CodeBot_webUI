import { useState } from 'react';
import { SpinnerCircular } from 'spinners-react';
import { useAtom } from 'jotai';
import { atomWithObservable } from 'jotai/utils';
import { lowlight } from 'lowlight';
import TextareaAutosize from 'react-textarea-autosize';
import { promptAtom, promptResponseAtom, isFetchingAtom } from '../../../atoms';


export const OutputCard = ({className}) => {
  const [ prompt ] = useAtom(promptAtom);
  return (
    <div className='border border-transparent transition-colors hover:border-emerald-700 rounded-lg drop-shadow-lg font-mono'>
      { prompt && 
        <div className='text-green-500 bg-slate-900 p-4 flex flex-row rounded-t-lg'>
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
  const [ isEditing, setIsEditing ] = useState(false);
  const [ isFetching ] = useAtom(isFetchingAtom);
  const [ promptResponse ]= useAtom(promptResponseAtom);

  // TODO Get the language detector to run...
  const promptAtomObserver = atomWithObservable(() => {
    console.log("## promptAtomObserver")
    let lang = lowlight.highlightAuto(promptResponse);
    console.log("detected lang:", lang)
  });

  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
  }

  return (
    <div className="text-sm bg-black bg-gradient-to-bl from-[#ffffff1a] to-transparent rounded-b-lg">
      { isFetching &&
        <div className='p-4'>
          <SpinnerCircular size={50} thickness={100} speed={125} enabled={true} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" className='justify-center self-center'/>
        </div>
      }

      { !isFetching && promptResponse !== '' && !isEditing &&
        <pre className='p-4 whitespace-pre-wrap' onClick={toggleIsEditing}>
          <code>
            {promptResponse}
          </code>
        </pre>
      }

      { isEditing &&
          <TextareaAutosize className='w-full h-fit p-4 text-green-500 bg-inherit bg-gradient-to-bl from-[#ffffff1a] to-transparent resize-none focus:outline-none' value={promptResponse}/>
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



