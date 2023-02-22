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
import { PAGE } from '../../utils'; 

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <ProjectsPage/>,
      },
      {
        path: PAGE.projects,
        element: <ProjectsPage/>,
      },
      {
        path: PAGE.configs,
        element: <ConfigsPage/>,
      }
    ],
  }
]);



