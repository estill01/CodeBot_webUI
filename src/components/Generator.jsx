import React, { useState } from "react";
import { useAtom } from 'jotai';
import { promptAtom } from "../atoms";

// TODO import api fetcher from utils



const GeneratorInput = ({ className }) => {
  const [inputText, setInputText] = useState("");
  const [ prompt, setPrompt ] = useAtom(promptAtom);

  const handleSubmit = async () => {
    setPrompt(inputText);
    // TODO fetch openai api response
  };

  return (
    <div id='GeneratorInput' className={`flex flex-row ${className}`}>
      <input
        type="text"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        className='p-2 rounded-md border border-gray-600 flex-1'
        placeholder="What should we build?"
      />
      <button 
        type="submit" 
        onClick={handleSubmit}
        className='ml-2 p-2 rounded-md border-1 border-purple-800 bg-purple-900'
      >
        Generate 
      </button>
    </div>
  );
}
export default GeneratorInput;



{/*    const response = await fetchOpenAI({*/}
      {/*prompt: inputText,*/}
    {/*});*/}
    {/*console.log(response);*/}

  // const [prompt, setPrompt] = useAtom(promptAtom);
  // const prompt = useAtomValue(promptAtom);

