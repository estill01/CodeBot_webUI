const Logo = ({className}) => {
  return (
    <div className={`flex flex-row content-center text-xl ${className}`}>
      <div className='my-auto mr-[0.25em] text-[#00f100] font-medium tracking-[-0.1em]'>
        &lt;/&gt;
      </div>
      <div className='my-auto font-semibold'>Code<span className='font-normal'>Bot</span></div>
    </div>
  )
}
export default Logo;