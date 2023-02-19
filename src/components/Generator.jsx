import React, { useState, useRef } from "react";
import { useAtom } from 'jotai';
import { promptAtom, promptResponseAtom, isFetchingAtom } from "../atoms";

// ---- TMP ----
import { fetchOpenAI } from "../utils/utils.js";
// -------------

// TODO import api fetcher from utils



const GeneratorInput = ({ className }) => {
  const [ prompt, setPrompt ] = useAtom(promptAtom);
  const [ promptResponse, setPromptResponse ] = useAtom(promptResponseAtom);
  const [ isFetching, setIsFetching ] = useAtom(isFetchingAtom);

  const inputRef = useRef();
  const formRef = useRef();

  const handleKeyPress = (e) => {
    console.log("handleKeyPress");
    if (e.key === "Enter") {
      console.log("enter pressed");
    }
  }
      // console.log(formRef.current);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("handleSubmit");
    console.log(e)
    console.log("submitting")
    console.log(inputRef.current.value)

    console.log("Prompt is: ", prompt);
    await setPrompt(inputRef.current.value)
    console.log("Prompt now: ", prompt);

    inputRef.current.value = ""

    setIsFetching(true);
    let response = await fetchOpenAI({prompt})
    setIsFetching(false);
    setPromptResponse(response)
  
    // setPrompt(e.target.value)
    // e.target.value = ""
    // TODO fetch openai api response
  };

  return (
    <div id='GeneratorInput' className={`flex flex-row ${className}`}>
      <form onSubmit={handleSubmit} ref={formRef} className='flex-1 flex active:outline-none'>
        <input
          type="text"
          name="prompt_input"
          className='p-2 rounded-md border border-gray-600 flex-1 mr-2 hover:border-green-600 focus:border-green-600 focus:outline-none'
          ref={inputRef}
          onKeyPress={handleKeyPress}
          placeholder="What should I make?"
          autoComplete="off"
        />
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
export default GeneratorInput;

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

