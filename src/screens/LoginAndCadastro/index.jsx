import inferiorDireito from '../../assets/Vector.png'
import inferiorEsquerdo from '../../assets/Vector-1.png'
import superiorDireito from '../../assets/Vector-3.png'
import superiorEsquerdo from '../../assets/Vector-2.png'
import logo from '../../assets/focus-sprinter-logo.png'
import './style.css'
import axios from "axios"
import { useContext, useEffect, useState } from 'react'
import { AuthContext, Auth } from '../../AuthContext'

function Background({ children }){
    return (
        <div style={{width: '100%', height: '100%'}} className='container'>
            <img src={inferiorDireito} alt="" style={{position:'absolute', bottom: 0, right: 0}}/>
            <img src={inferiorEsquerdo} alt="" style={{position:'absolute', bottom: 0, left: 0}}/>
            <img src={superiorDireito} alt="" style={{position:'absolute', top: 0, right: 0}}/>
            <img src={superiorEsquerdo} alt="" style={{position:'absolute', top: 0, left: 0}}/>

            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="formLogin">
                {children}
            </div>
        </div>
    )
}

function Login(){
    const { token, setToken } = useContext(Auth)
    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)



    useEffect(()=>{
        axios.get('http://localhost:3000/auth', {
          headers: {
            'authorization': `${token}`
          }
        }).then((value) => {
          if (value.status === 200 && value.data.validToken === true) location.pathname = '/home'
          console.log(value)
        })
    }, [])
    async function loginAction(){
        const returned = await axios.post("http://localhost:3000/signin", {
            email, senha
        })
        console.log(returned.data.Authenticate)
        if (returned.data.Authenticate){
            localStorage.setItem('token', returned.data.token)
            setToken(returned.data.token)
            location.pathname = '/home'
        }
    }

    return (
        <Background>
            <h3>Welcome</h3>
            <div className="inputs">
                <div className="input">
                    <label htmlFor="login">Login:</label>
                    <input type="text" name="login" id="" onChange={(e) => {
                        setEmail(e.target.value)
                        console.log(e.target.value)
                    }} />
                </div>
                <div className="input">
                    <label htmlFor="password">Senha:</label>
                    <input type="text" name="password" id="" onChange={(e) => {
                        setSenha(e.target.value)
                        console.log(e.target.value)
                    }} />
                </div>
            </div>
            <button onClick={loginAction}>Entrar</button>
            <p>Não tem cadastro? <a href="/cadastro">Faça já</a></p>
        </Background>
    )
}
function Cadastro(){
    const { token, setToken } = useContext(Auth)
    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)
    const [nome, setNome] = useState(null)
    useEffect(()=>{
        axios.get('http://localhost:3000/auth', {
          headers: {
            'authorization': `${token}`
          }
        }).then((value) => {
          if (value.status === 200 && value.data.validToken === true) location.pathname = '/home'
          console.log(value)
        })
    }, [])
    async function signUp(){
        const returned = await axios.post("http://localhost:3000/signup", {
            email, senha, nome
        })
        if (returned.data.created){
            localStorage.setItem('token', returned.data.token)
            setToken(returned.data.token)
            location.pathname = '/home'
        }
        if (returned.data.erro) console.log(returned.data.erro)
    }

    return (
        <Background>
            <h3>Cadastro</h3>
            <div className="inputs">
                <div className="input">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" name="nome" id="" onChange={(e) => {
                        setNome(e.target.value)
                        console.log(e.target.value)
                    }} />
                </div>
                <div className="input">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="" onChange={(e) => {
                        setEmail(e.target.value)
                        console.log(e.target.value)
                    }} />
                </div>
                <div className="input">
                    <label htmlFor="password">Senha:</label>
                    <input type="password" name="password" id="" onChange={(e) => {
                        setSenha(e.target.value)
                        console.log(e.target.value)
                    }} />
                </div>
            </div>
            <button onClick={signUp}>Cadastrar</button>
            <p>Já tem login? <a href="/login">Entre já</a></p>
        </Background>
    )
}
export {Login, Cadastro}