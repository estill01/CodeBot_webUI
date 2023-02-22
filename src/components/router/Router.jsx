import { 
  createBrowserRouter, 
  Outlet,
} from 'react-router-dom';
import { App } from '../core/App';
import {
  ProjectsPage,
  ConfigsPage,
  ErrorPage,
} from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
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



