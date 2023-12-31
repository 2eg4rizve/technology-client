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
import ProductDetails from './components/Brand/ProductDetails';
import ProductUpdate from './components/Brand/ProductUpdate';
import MyCart from './pages/MyCart/MyCart';
import Speciality from './pages/Speciality/Speciality';
import Blog from './pages/Blog/Blog';
import ContactUs from './pages/ContactUs/ContactUs';
import PivateRoute from './components/PivateRoute/PivateRoute';
import MyProduct from './pages/MyProduct/MyProduct';

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
        path: "/speciality",
        element: <Speciality></Speciality>

      },
      {
        path: "/blog",
        element:  <PivateRoute><Blog></Blog></PivateRoute> 

      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>

      },
      {
        path: "/addProduct",
        element: <PivateRoute> <AddProduct></AddProduct></PivateRoute>

      },
      {
        path: "/brands",
        element: <Brand></Brand>
      },
      {
        path: "/brandDetails/:id",
        element:  <Bdetails></Bdetails>,
        // loader: () => fetch('/brandData.json')

      },
      {
        path: "/productDetail/:id",
        element: <PivateRoute><ProductDetails></ProductDetails></PivateRoute> ,
        loader: () => fetch("https://technology-server-7itb96szo-2eg4rizve.vercel.app/products")
      },
      {
        path: "productUpdate/:id",
        element: <PivateRoute><ProductUpdate></ProductUpdate></PivateRoute> ,
        loader: () => fetch("https://technology-server-7itb96szo-2eg4rizve.vercel.app/products")

      },
      {
        path:"/myCarts",
        element: <PivateRoute><MyCart></MyCart></PivateRoute> ,
        loader: () => fetch("https://technology-server-7itb96szo-2eg4rizve.vercel.app/carts")

      },
      {
        path:"/myProducts",
        element: <PivateRoute><MyProduct></MyProduct></PivateRoute> ,
        loader: () => fetch("https://technology-server-7itb96szo-2eg4rizve.vercel.app/products")

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

//    loader: ({params}) => fetch(`https://technology-server-7itb96szo-2eg4rizve.vercel.app/products/${params.id}`)