import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router'
import Root from './layouts/Root.jsx'
import Home from '../src/components/home/Home.jsx'
import Login from '../src/components/login/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        path: '/',
        Component: Home
      },
      {
        path: 'login',
        Component: Login
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
