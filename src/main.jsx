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
import Category from './components/Category/Category';
import MenuCommonPage from './components/MenuCommontPage/MenuCommonPage';
import JobDetails from './components/JobDetails/JobDetails';
import Pichart from './components/PiChart/Pichart';
import ApplidJob from './components/ApplidJob/ApplidJob';
import Blogs from './components/Blogs/Blogs';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Commont></Commont>,
    errorElement: <Errors/>,
    children: [
      {
        path: "/",
        element: <MenuCommonPage></MenuCommonPage>,
      },
      {
        path: "/details/:id",
        element: <JobDetails></JobDetails>,
        loader : () => fetch("/jobdetails.json")
      },
      {
        path: "/Statistics",
        element: <Pichart></Pichart>,
        
      },
      {
        path: "/Applied-Jobs",
        element: <ApplidJob></ApplidJob>,
        
      },
      {
        path: "/Blogs",
        element: <Blogs></Blogs>,
        
      },
      
    ],

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
     
  </React.StrictMode>,
)
