import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './layout/Root.jsx';
import Home from './HomePage/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import AuthProvider from './routes/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';
import NotFound from './NotFound/NotFound';
import AddProduct from './Pages/AddProduct';
import Products from './Pages/Products';
import CardDetails from './Pages/CardDetails';
import UpdateProduct from './Pages/UpdateProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: "/home",
        element: <PrivateRoute><Home></Home></PrivateRoute>,
        loader: () => fetch('/fakeData.json')
      },
      {
        path: '/addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/products',
        element: <PrivateRoute><Products></Products></PrivateRoute>,
        loader: () => fetch('https://technology-and-electronics-server-kohl.vercel.app/products')
      },
      {
        path: '/cardDetails/:_id',
        element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://technology-and-electronics-server-kohl.vercel.app/products/${params._id}`)
      },
      {
        path: '/updateProduct/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({ params }) => fetch(`https://technology-and-electronics-server-kohl.vercel.app/products/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
