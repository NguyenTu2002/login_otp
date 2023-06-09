import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//
import Username from "./components/Username"
import Profile from "./components/Profile"
import Password from "./components/Password"
import PageNotFound from "./components/PageNotFound"
import Recovery from "./components/Recovery"
import Reset from "./components/Reset"
import Register from "./components/Register"
//
const router = createBrowserRouter([
  {
    path : '/',
    element : <Username></Username>
},
{
    path : '/register',
    element : <Register></Register>
},
{
    path : '/password',
    element : <Password />
},
{
    path : '/profile',
    element : <Profile />
},
{
    path : '/recovery',
    element : <Recovery></Recovery>
},
{
    path : '/reset',
    element : <Reset></Reset>
},
{
    path : '*',
    element : <PageNotFound></PageNotFound>
},
])
export default function App() {
  return (
    <main>
      <RouterProvider router={router}>

      </RouterProvider>
    </main>
  );
}
