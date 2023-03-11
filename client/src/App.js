import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hihi</div>
  },
  {
    path: '/register',
    element: <div>register</div>
  }
])
export default function App() {
  return (
    <main>
      <RouterProvider router={router}>

      </RouterProvider>
    </main>
  );
}
