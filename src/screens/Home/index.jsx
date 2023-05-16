import { useContext, useEffect } from "react"
import { Auth } from "../../AuthContext"
import axios from "axios"

export default function Home(){
    const {token} = useContext(Auth)
    useEffect(()=>{
        axios.get('localhost:3000/auth', {
            headers: {
                Authorization: `${token}`
            }
        })
    }, [])
    return (
        <div>
            <p>Home page</p>
        </div>
    )
}