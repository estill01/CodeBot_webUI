import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider, createStore } from 'jotai'
import { RouterProvider } from 'react-router-dom';
import { router } from './components/router/Router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
