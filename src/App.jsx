import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'
import Cadastro from './screens/Cadastro'
import { AuthContext } from './AuthContext'



const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/cadastro',
    element: <Cadastro />

  }
])



function App() {
  return (
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  )
}

export default App
