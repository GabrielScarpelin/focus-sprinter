import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Dashboard from './screens/Dashboard'
import {Login, Cadastro} from './screens/LoginAndCadastro'
import { Auth, AuthContext } from './AuthContext'
import axios from 'axios'
import MateriasPage from './screens/Materias'

const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard/materias',
        element: <MateriasPage />
      }
    ]
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
