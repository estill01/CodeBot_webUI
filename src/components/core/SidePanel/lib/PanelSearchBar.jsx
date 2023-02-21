import { useState, useRef } from 'react';
import { SpinnerCircular } from 'spinners-react';
import { atom, useAtom } from 'jotai';
import { 
  promptAtom, 
  isFetchingAtom, 
  isPanelOpenAtom,
  activeSidePanelSectionAtom,
  SIDE_PANEL_SECTIONS,
} from '../../../../atoms';

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

export const PanelSearchBar = ({className}) => {
  const [isFocus, setIsFocus] = useState(false);
  const refInput = useRef(null);
  const refInputContainer = useRef(null);
  const handleFocus = () => { 
    setIsFocus(true);
    setFocusStyles(); 
  }
  const handleBlur = () => { 
    setIsFocus(false);
    removeFocusStyles(); 
  }
  const handleMouseEnter = () => { if (!isFocus) setFocusStyles(); }
  const handleMouseLeave = () => { if (!isFocus) removeFocusStyles(); }
  const doFocus = () => { refInput.current.focus(); }
  const setFocusStyles = () => {
    refInputContainer.current.classList.add('border-green-500');
    refInputContainer.current.classList.remove('border-transparent');
  }
  const removeFocusStyles = () => {
    refInputContainer.current.classList.remove('border-green-500');
    refInputContainer.current.classList.add('border-transparent');
  }
  const handlePress = (e) => {
  }
  const handleSubmit = (e) => {
  }

  return (
    <div 
    className={`flex flex-row transition-colors items-center py-1 pl-1 pr-2 rounded-md bg-[#3b3b3b] border border-transparent ${className}`}
    ref={refInputContainer}
    onClick={doFocus}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      <MagnifyingGlassIcon className="w-4 h-4 text-gray-400 mr-1"/>
      <input 
      type="text"
      className='text-sm outline-none flex-1' 
      ref={refInput}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder='Search..'
      />
    </div>
  )
}
