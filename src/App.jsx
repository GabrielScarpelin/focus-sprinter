import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Home from './screens/Home'
import {Login, Cadastro} from './screens/LoginAndCadastro'
import { Auth, AuthContext } from './AuthContext'
import axios from 'axios'



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
