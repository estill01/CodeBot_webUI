import { useState } from 'react';
import { useRef } from 'react';
import { useAtom } from 'jotai';

export const KeyInputForm = ({hasKeyAtom, keyAtom, inputStyles, buttonStyles}) => {
  const [hasFocus, setHasFocus] = useState(false);
  const [key, setKey] = useAtom(keyAtom); 
  const [hasKey, setHasKey] = useAtom(hasKeyAtom); 
  const refInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setKey(refInput.current.value);
    setHasKey(true);
  }
  const handleFocus = (e) => {
    setHasFocus(true);
    setFocusStyles();
  }
  const handleBlur = (e) => {
    setHasFocus(false);
    setDefaultStyles();
  }
  const handleMouseEnter = (e) => {
    if (!hasFocus) { setFocusStyles() }
  }
  const handleMouseLeave = (e) => {
    if (!hasFocus) { setDefaultStyles() }
  }
  const setFocusStyles = () => {
    refInput.current.classList.add('border-emerald-500');
  }
  const setDefaultStyles = () => {
    refInput.current.classList.remove('border-emerald-500');
  }

  return (
    <form
    onSubmit={handleSubmit}
    className='flex flex-row items-center'
    >
      <input 
      className={inputStyles || 'transition-colors outline-none border-2 border-zinc-600 p-2 rounded-md'}
      placeholder='API key'
      ref={refInput}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      />
      <button 
      className={buttonStyles || 'bg-emerald-600 text-white p-2 rounded-md ml-3'}

      >
        Add Key
      </button>
    </form>
  )
}
