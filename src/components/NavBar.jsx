import GeneratorInput from './Generator';

const NavBar = ({ className }) => {
  return (
    <div id='NavBarPadding' className='h-16'>
      <div 
        id='NavBar' 
        className={`fixed top-0 left-0 right-0 h-16 flex flex-row items-center text-white p-4 bg-gradient-to-bl from-transparent to-[#00000057] ${className}`}
      >
        <div className='w-1/5'>
          <Logo/>
        </div>
      </div>
    </div>
  )
};
export default NavBar;

const Logo = ({className}) => {
  return (
    <div className={`flex flex-row content-center text-xl ${className}`}>
      <div className='my-auto mr-2 text-[#00f100] font-medium tracking-[-0.1em]'>
        &lt;/&gt;
      </div>
      <div className='my-auto font-semibold'>Code<span className='font-normal'>Bot.ai</span></div>
    </div>
  )
}

const MenuArea = ({className}) => {
  return (
    <div className={`flex flex-row ${className}`}>
      Profile
    </div>
  )
}

{/*        <div className='flex-1'>*/}
          {/*<GeneratorInput className='mx-8'/>*/}
        {/*</div>*/}

