export const CodeGlyph = ({className, color}) => {
  return (
      <div className={`${className} ${color} tracking-[-0.15em] font-bold`}>
        &lt;<span className='font-normal'>/</span>&gt;
      </div>
  )
}
