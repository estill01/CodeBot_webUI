import { 
  createBrowserRouter, 
  Outlet,
} from 'react-router-dom';
import { Root } from './Root';
import {
  ProjectsPage,
  ConfigsPage,
  ErrorPage,
} from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
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



