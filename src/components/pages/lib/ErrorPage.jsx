import { Page } from './Page';
import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Page className='grid'>
      <div className='place-self-center text-center'>
      <span className='text-6xl font-semibold'>Oops</span>
      <div className='mt-2'>There's nothing here!</div>
      <div className='mt-2 text-zinc-500'>
        <i>{error.statusText || error.message}</i>
      </div>
    </div>
    </Page>
  )
}
