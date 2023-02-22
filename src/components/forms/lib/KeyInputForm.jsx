import { useRef } from 'react';
import { useAtom } from 'jotai';

export const KeyInputForm = ({hasKeyAtom, keyAtom, inputStyles, buttonStyles}) => {
  const [key, setKey] = useAtom(keyAtom); 
  const [hasKey, setHasKey] = useAtom(hasKeyAtom); 
  const refInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setKey(refInput.current.value);
    setHasKey(true);
  }

  return (
    <form
    onSubmit={handleSubmit}
    className='flex flex-row items-center'
    >
      <input 
      className={inputStyles || 'border-2 border-emerald-600 p-2 rounded-md'}
      className='flex-1 my-2 p-2 border rounded-md'
      placeholder='API key'
      ref={refInput}
      />
      <button 
      className={buttonStyles || 'bg-emerald-600 text-white p-2 rounded-md ml-3'}

      >
        Add Key
      </button>
    </form>
  )
}




