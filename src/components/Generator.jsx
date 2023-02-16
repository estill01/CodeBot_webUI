import React, { useState } from "react";

const GeneratorInput = ({ className }) => {
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = async () => {
    const response = await fetchOpenAI({
      prompt: inputText,
    });
    setOutput(response);
  };

  return (
    <div id='GeneratorInput' className={className}>
      <input
        type="text"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        className='p-2 rounded-md border border-gray-600'
      />
      <button 
        type="submit" 
        onClick={handleSubmit}
        className='ml-2 p-2 rounded-md border-1 border-purple-800'
      >
        Generate 
      </button>
      <div id="output">{output}</div>
    </div>
  );
}
export default GeneratorInput;

async function fetchOpenAI({
  endpoint="https://api.openai.com/v1/completions",
  model="text-davinci-003",
  prompt="",
}) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: model,
      prompt: prompt,
      max_tokens: 100,
      n: 1,
      stop: "",
      temperature: 0.5
    })
  });

  const data = await response.json();
  console.log("# OpenAI API response:", data);
  return data.choices[0].text;
};


