import { Terminal as XTerm } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';
import 'xterm/lib/xterm.js';


const Terminal = ({className}) => {
  return (
    <>
      <_TerminalRoot className={`${className}`}/>
    </>
  )
}
export default Terminal;

const _TerminalRoot = ({className}) => {
  return (
    <div id="xterm_root" className={`${className}`}>
      <_Terminal/>
    </div>
  )
}

const _Terminal = ({className}) => {
  const xterm = new XTerm();
  const fitAddon = new FitAddon();
  xterm.loadAddon(fitAddon);
  xterm.open(document.getElementById('xterm_root'));
  return (
    <TerminalRoot className={`${className}`}/>
  )
}
