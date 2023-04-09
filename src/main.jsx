import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Errors from './components/Errors/Errors';
import Headers from './components/Headers/Headers';
import Commont from './components/commons/Commont';
import MenuItems from './components/MenuItems/MenuItems';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Commont></Commont>,
    errorElement: <Errors/>,
    children: [
      {
        path: "/",
        element: <MenuItems></MenuItems>,
      },
    ],

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
