import React, { useState } from "react";
import { useAtom } from 'jotai';
import { promptAtom } from "../atoms";

// TODO import api fetcher from utils



const GeneratorInput = ({ className }) => {
  const [ prompt, setPrompt ] = useAtom(promptAtom);

  const handleKeyPress = (e) => {
    console.log("handleKeyPress");
    if (e.key === "Enter") {
      console.log("handleKeyPress: enter");
      console.log(e.target.value)
      setPrompt(e.target.value)
      e.target.value = ""
    }
  }

  const handleKeyDown = (e) => {
    console.log("handleKeyDown")
  }
  const handleKeyUp = (e) => {
    console.log("handleKeyUp")
  }
  const handleChange = (e) => {
    console.log("handleChange")
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitting")
    console.log(e.target.value)

    // setPrompt(e.target.value)
    // e.target.value = ""
    // TODO fetch openai api response
  };

  return (
    <div id='GeneratorInput' className={`flex flex-row ${className}`}>
      <form onSubmit={handleSubmit}>
        <input
          name="prompt_input"
          type="text"
          onKeyPress={handleKeyPress}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onChange={handleChange}
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



{/*    const response = await fetchOpenAI({*/}
      {/*prompt: inputText,*/}
    {/*});*/}
    {/*console.log(response);*/}

  // const [prompt, setPrompt] = useAtom(promptAtom);
  // const prompt = useAtomValue(promptAtom);

