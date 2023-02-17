import React, { useState, useRef } from "react";
import { useAtom } from 'jotai';
import { promptAtom } from "../atoms";

// TODO import api fetcher from utils



const GeneratorInput = ({ className }) => {
  const [ prompt, setPrompt ] = useAtom(promptAtom);
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
    {/*e.stopPropagation();*/}
    console.log("handleSubmit");
    console.log(e)
    console.log("submitting")
    console.log(inputRef.current.value)
    setPrompt(inputRef.current.value)
    inputRef.current.value = ""

    // setPrompt(e.target.value)
    // e.target.value = ""
    // TODO fetch openai api response
  };

  return (
    <div id='GeneratorInput' className={`flex flex-row ${className}`}>
      <form onSubmit={handleSubmit} ref={formRef} >
        <input
          name="prompt_input"
          ref={inputRef}
          type="text"
          onKeyPress={handleKeyPress}
          className='p-2 rounded-md border border-gray-600 flex-1'
          placeholder="What are we building?"
        />
        <input
          type="submit" 
          className='ml-2 p-2 rounded-md border-1 border-purple-800 bg-purple-900 hover:bg-purple-800 active:bg-purple-900 cursor-pointer'
          value="Generate"
        />
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

