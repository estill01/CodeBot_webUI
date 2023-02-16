import React, { useState } from "react";

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

const Generator = (props) => {
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = async () => {
    console.log("# inputText:", inputText);
    const response = await fetchOpenAI({
      prompt: inputText,
    });
    setOutput(response);
  };

  return (
    <div id='Generator' className={`${props.className}`}>
      <input
        type="text"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        className='p-2 rounded-md border-1 border-gray-300'
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

export default Generator;

