import React, { useState } from "react";
// TODO import api fetcher from utils


const GeneratorInput = ({ className }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = async () => {
    const response = await fetchOpenAI({
      prompt: inputText,
    });
    console.log(response);
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
        className='ml-2 p-2 rounded-md border-1 border-purple-800'
      >
        Generate 
      </button>
    </div>
  );
}
export default GeneratorInput;
