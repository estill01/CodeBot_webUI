import React, { useState, useRef } from "react";
import { useAtom } from 'jotai';
import { 
  promptAtom, 
  promptResponseAtom, 
  isFetchingAtom,
} from "../../atoms";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import { CodeGlyph } from '../utils';


// ---- TMP ----
import { fetchOpenAI } from "../../utils";
// -------------

// TODO import api fetcher from utils

const GeneratorBar = ({ className }) => {
  const [ prompt, setPrompt ] = useAtom(promptAtom);
  const [ promptResponse, setPromptResponse ] = useAtom(promptResponseAtom);
  const [ isFetching, setIsFetching ] = useAtom(isFetchingAtom);

  const refForm = useRef();
  const refInputContainer = useRef();
  const refInput = useRef();

  const handleFocus = () => {
    refInputContainer.current.classList.add("border-green-600");
  }
  const doFocus = () => { refInput.current.focus(); }
  const handlBlur = () => {
    refInputContainer.current.classList.remove("border-green-600");
  }
  const handleKeyPress = (e) => {
    console.log("handleKeyPress");
    if (e.key === "Enter") {
      console.log("enter pressed");
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("handleSubmit");
    console.log(e)
    console.log("submitting")
    console.log(refInput.current.value)

    console.log("Prompt is: ", prompt);
    setPrompt(refInput.current.value)
    console.log("Prompt now: ", prompt);

    refInput.current.value = ""

    setIsFetching(true);
    let response = await fetchOpenAI({prompt})
    setIsFetching(false);
    setPromptResponse(response)
  
    // setPrompt(e.target.value)
    // e.target.value = ""
    // TODO fetch openai api response
  };

  return (
    <div id='GeneratorBar' className={`flex flex-row ${className}`}>
      <form 
      onSubmit={handleSubmit} 
      ref={refForm} 
      className='flex-1 flex active:outline-none'
      >
        <div
        className='flex flex-row items-center bg-[#3b3b3b] py-2 px-1.5 rounded-md border border-gray-600 flex-1 mr-2 hover:border-green-600 focus:border-green-600 outline-none transition-colors'
        ref={refInputContainer}
        onClick={doFocus}
        >
          <CodeGlyph 
          className='w-6 h-6 text-gray-500 mr-2' 
          />
          <input
            type="text"
            name="prompt_input"
            className='flex-1 focus:outline-none'
            ref={refInput}
            onKeyPress={handleKeyPress}
            onFocus={handleFocus}
            onBlur={handlBlur}
            placeholder="What can I code for you?"
            autoComplete="off"
          />

        </div>
        <button
          type="submit"
          className="inline-flex items-center transition-colors rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 active:bg-green-800 focus:outline-none"

        >
            Generate
        </button>
      </form>
    </div>
  );
}
export default GeneratorBar;

      // formRef.current.submit();
      // submit the form
      
{/*      console.log("handleKeyPress: enter");*/}
      {/*console.log(e.target.value)*/}
      {/*setPrompt(e.target.value)*/}
      {/*e.target.value = ""*/}




{/*    const response = await fetchOpenAI({*/}
      {/*prompt: inputText,*/}
    {/*});*/}
    {/*console.log(response);*/}

  // const [prompt, setPrompt] = useAtom(promptAtom);
  // const prompt = useAtomValue(promptAtom);

