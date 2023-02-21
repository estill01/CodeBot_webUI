export const Page = ({className, children}) => {
  return (
    <div className={`flex-1 flex flex-col h-auto overflow-x-hidden ${className}`}>
      {children}
    </div>
  )
}
