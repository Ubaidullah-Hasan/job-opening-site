import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import "./index.css"
import JobDes from './JobDes/JobDes';
import ApplyForm from './ApplyForm/ApplyForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/:jobtitle",
    element: <JobDes></JobDes>,
    loader: () => fetch('data.json')
  },
  {
    path: "/:jobtitle/apply-form",
    element: <ApplyForm></ApplyForm>
  }
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
