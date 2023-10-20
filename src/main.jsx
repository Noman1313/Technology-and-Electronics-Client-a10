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
        loader: () => fetch('http://localhost:5000/products')
      },
      {
        path: '/cardDetails/:_id',
        element: <CardDetails></CardDetails>,
        loader: ()=>fetch('http://localhost:5000/products')
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
