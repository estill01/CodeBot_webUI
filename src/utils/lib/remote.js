/*import { isFetchingAtom } from '../atoms';*/
import { useAtom } from 'jotai';
import { hasKeyOpenAIAtom, keyOpenAIAtom } from '../../atoms';

// TODO Refactor
// TODO Add Error Handling


export const fetchOpenAI = async ({
  endpoint="https://api.openai.com/v1/completions",
  model="code-davinci-002",
  max_tokens=100,
  prompt=""
}) => {

  // TODO FIX - Need to look into Jotai aysnc stuff
  const [hasKeyOpenAI] = useAtom(hasKeyOpenAIAtom);
  const [keyOpenAI] = useAtom(keyOpenAIAtom);

  if (!hasKeyOpenAI) {
    // TODO Throw a modal or something to prompt for key
    console.error("No OpenAI API Key");
    return;
  } 
  
  console.log("# fetchOpenAI()");
  console.log("prompt: ", prompt);

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${keyOpenAI}`,
    },
    body: JSON.stringify({
      model: model,
      prompt: prompt,
      max_tokens: max_tokens,
      n: 1,
      stop: "",
      temperature: 0.5
    })
  });

  const data = await response.json();
  console.log("# OpenAI API response:", data);

  return data.choices[0].text;
};






  // const [isFetching, setIsFetching] = useAtom(isFetchingAtom);
  // console.log("isFetching", isFetching);
  // setIsFetching(true);

  // console.log("# response:", data.choices[0].text);

  // setIsFetching(false);





/*openai.generate.code.fast({ prompt: "const foo = " }).then(console.log);*/
/*openai.generate.code.good()*/
/*openai.generate.code.edit()*/
/*openai.edit.code()*/

/*const openai = {*/
  /*generate: {*/
    /*code: {*/
      /*good: async ({*/
        /*prompt="",*/
      /*}) => {*/
      /*},*/
      /*fast: async () => {*/
      /*}*/
    /*}*/
  /*},*/
  /*edit: {*/
    /*code: async () => {*/
    /*}*/
  /*}*/
/*}*/


/*// '/edits' endpoint automatically uses the 'text-davinci-edit-001' model*/
/*// and should be used for both text and code edits*/
const API = {
  openai: {
    _base: 'https://api.openai.com/v1',
    // generate: this.openai._base + '/completions',
    // edit: this.openai._base + '/edits',
    model: {
      text: {
        davinci: {
          id: "text-davinci-003",
          max_tokens: 4000,
        }
      },
      code: {
        davinci: {
          id: "code-davinci-002",
          max_tokens: 8000,
        },
        cushman: {
          id: "code-cushman-001",
          max_tokens: 2048,
        },
        good: { 
          // id: this.openai.model.code.davinci.id,
          // max_tokens: this.openai.model.code.davinci.max_tokens,
        },
        fast: {
          // id: this.openai.model.code.cushman.id,
          // max_tokens: this.openai.model.code.cushman.max_tokens,
        },
        edit: {
          id: "code-davinci-edit-001",
        },
      }
    }
  }
}


