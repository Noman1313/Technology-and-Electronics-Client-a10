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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/home",
        element: <PrivateRoute><Home></Home></PrivateRoute>,
        loader: () => fetch('/fakeData.json')
      },
      {
        path: '/',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
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
