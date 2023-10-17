import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './Provider/AuthProvider';
import AddProduct from './pages/AddProduct/AddProduct';
import Brand from './components/Brand/Brand';
import Bdetails from './components/Brand/Bdetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>

      },
      {
        path: "/brands",
        element: <Brand></Brand>
      },
      {
          path: "/brandDetails/:id",
          element:<Bdetails></Bdetails>,
          // loader: () => fetch('/brandData.json')

      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
