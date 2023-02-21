const CodeGlyph = ({className}) => {
  return (
      <div className={`${className} tracking-[-0.15em] font-bold`}>
        &lt;<span className='font-normal'>/</span>&gt;
      </div>
  )
}
export default CodeGlyph;
