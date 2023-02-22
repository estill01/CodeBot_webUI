import { 
  createBrowserRouter, 
} from 'react-router-dom';
import {
  Page,
  ProjectsPage,
  ConfigsPage,
  ErrorPage,
} from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Page/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: 'projects',
        element: <ProjectsPage/>,
      },
      {
        path: 'configs',
        element: <ConfigsPage/>,
      }
    ],
  }
]);



