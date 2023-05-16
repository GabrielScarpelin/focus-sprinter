import React, { useState } from 'react'
import { createContext } from 'react'
import ReactDOM from 'react-dom/client'


const Auth = createContext(null)

function AuthContext({children}){
    const [token, setToken] = useState(localStorage.getItem('token') || null)
    return (
        <Auth.Provider value={{token, setToken}}>
            {children}
        </Auth.Provider>
    )
}

export {AuthContext, Auth}