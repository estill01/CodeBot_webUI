import { Outlet } from 'react-router-dom';
import { Page } from '../pages';

export const Root = () => {
  return (
    <Page>
      <Outlet/>
    </Page>
  )
}

