import { useAtom } from 'jotai';
import { activePageAtom } from '../../../atoms';
import { PAGE } from '../../../utils';
import { useLocation } from 'react-router-dom';

export const Page = ({className, page, children}) => {
  const [activePage, setActivePage] = useAtom(activePageAtom);


  // TODO - Need to update for nested resources
  let location = useLocation().pathname.replace('/', '');
  if (location === "") { location = PAGE.projects }
  if (location !== activePage) { setActivePage(PAGE[location]) }

  console.log("-- Page.jsx");
  console.log("activePage: ", activePage, "page: ", page, "location: ", location);

  return (
    <div className={`flex-1 flex flex-col h-auto overflow-x-hidden ${className}`}>
      {children}
    </div>
  )
}
