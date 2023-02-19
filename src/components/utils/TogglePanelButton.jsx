import { useAtom } from 'jotai';
import { isPanelOpenAtom } from '../../atoms';
import { DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons';

const TogglePanelButton = ({className, color='grey', hoverColor="green"}) => {
  const [ isPanelOpen, setIsPanelOpen ] = useAtom(isPanelOpenAtom);

  const doToggle = () => {
    setIsPanelOpen(!isPanelOpen);
  }
  return (
    <div className={`border border-slate-800 rounded-md p-1 ml-3 hover:cursor-pointer hover:bg-neutral-800 hover:border-green-800 active:bg-neutral-900 ${className}`} onClick={doToggle}>
      { isPanelOpen ? <DoubleArrowLeftIcon className='w-3 h-3' color={color} /> : <DoubleArrowRightIcon className='w-3 h-3' color={color}/> }
    </div>
  )
}
export default TogglePanelButton;
