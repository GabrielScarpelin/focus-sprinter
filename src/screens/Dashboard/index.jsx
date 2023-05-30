import { useContext, useEffect, useState } from "react"
import { Auth } from "../../AuthContext"
import './output.css'
import axios from "axios"
import logo from '../../assets/logo.svg'
import avatar from '../../assets/avatar.svg'
import line from '../../assets/line.svg'
import { Outlet } from "react-router-dom"



function AuthingComponent() {
    return (
        <div>
            <p>Autenticando...</p>
        </div>
    )
}
function Searchbar(){
    return (
        <label
            className="mt-2 right-0  bg-white min-w-sm flex flex-col md:flex-row items-center  border py-1 px-2 rounded-3xl gap-2 shadow-5xl focus-within:border-gray-300"
            htmlFor="small-input">

            <input id="search-bar" placeholder="Faça sua pesquisa aqui"
                className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white" />
            <button
                className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">

                <div className="relative">
                    <div
                        className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                        <svg className="opacity-0 animate-spin w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                stroke-width="4"></circle>
                            <path className="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>
                    </div>

                    <div className="flex items-center transition-all opacity-1 valid:">
                        <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                        Search
                        </span>
                    </div>

                </div>

            </button>
        </label>
    )
}

function Sidebar(){
    return(
        <main>
         
<div className="">
  <div className="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-red-300 hover:shadow-lg">
    <div className="flex h-screen flex-col justify-between pt-2 pb-6">
      <div>

        <ul className="mt-6 space-y-2 tracking-wide">
          <li className="min-w-max">
            <a href="http://localhost:3000/" aria-label="Matérias" className="relative flex items-center space-x-4 bg-gradient-to-r from-red-200 to-red-300 px-4 py-3 text-white">
              <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-red-400 dark:fill-slate-600"></path>
                <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-red-200 group-hover:text-red-300"></path>
                <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-300"></path>
              </svg>
              <span className="-mr-1 font-medium">Home</span>
            </a>
          </li>
          <li className="min-w-max">
            <a href="http://localhost:3000/materias" className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path className="fill-current text-gray-300 group-hover:text-red-500" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                <path className="fill-current text-gray-600 group-hover:text-red-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
              </svg>
              <span className="group-hover:text-gray-700">Matérias</span>
            </a>
          </li>
          <li className="min-w-max">
            <a href="http://localhost:3000/questionario" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path className="fill-current text-gray-600 group-hover:text-red-600" fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                <path className="fill-current text-gray-300 group-hover:text-red-500" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
              </svg>
              <span className="group-hover:text-gray-700">Questionários</span>
            </a>
          </li>
          <li className="min-w-max">
            <a href="http://localhost:3000/pomodoro" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path className="fill-current text-gray-600 group-hover:text-red-600" d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path className="fill-current text-gray-300 group-hover:text-red-500" d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
              <span className="group-hover:text-gray-700">Pomodoro</span>
            </a>
          </li>
          <li className="min-w-max">
            <a href="http://localhost:3000/profile" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path className="fill-current text-gray-300 group-hover:text-red-500" d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path className="fill-current text-gray-600 group-hover:text-red-600" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
              </svg>
              <span className="group-hover:text-gray-700">Perfil</span>
            </a>
          </li>
        </ul>
      </div>
      
    </div>
  </div>
</div>
        </main>
    )
}
function otherHome(){
    return (
            <div className="grid grid-cols-3 gap-2 ">
                <div className=' bg-white w-[496px] h-[665px] inline-block absolute rounded-md left-[400px] top-64 text-center'>
                    <h1 className=' text-2xl'>Rendimento Estudantil</h1>
                </div>
                <div className=' bg-white w-[537px] h-[310px] inline-block absolute rounded-md left-[960px] top-64 text-center'>
                    <h1 className=' text-2xl'>Tempo de estudo</h1>
                </div>
                <div className=' bg-white w-[537px] h-[300px] inline-block absolute rounded-md left-[960px] top-[620px] text-center'>
                    <h1 className=' text-2xl'>Ultimos Assuntos</h1>
                </div>
            </div>
    )
}

export default function Dashboard() {
    const { token } = useContext(Auth)
    const [autenticando, setAutenticando] = useState(true)
    useEffect(() => {
        const teste = async function () {
            const returned = await axios.get('http://localhost:3001/auth', {
                headers: {
                    Authorization: `${token}`
                }
            })
            console.log(returned.data)
            if (!(returned.status === 200 && returned.data.validToken)) location.pathname = '/login'
            else setAutenticando(false)
        }()
    }, [])
    return autenticando ? <AuthingComponent /> : (
        <main className=" min-h-screen  bg-red-400">
            {/*Header*/}
            <div className=' flex items-center '>
                <div className='flex ml-6'>

                    <img className=' sm:w-16 sm:h-16 md:w-28 md:h-28 lg:w-28 lg:h-28 xl:w-36 xl:h-36 2xl:w-80 2xl:h-40' src={logo} alt="Focus-sprinter logo " />
                </div>
                <div>
                    <img className=' flex sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-36 xl:h-36 items-center justify-center rounded-full ml-20 ' src={avatar} alt="Focus-sprinter avatar" />
                </div>
                <div>
                    <h1 className="sm:text-base md:text-3xl lg:text-3xl xl:text-4xl font-bold leading-tight text-gray-50 ml-14 ">
                        Bem Vindo João</h1>
                </div>
                <div className='  right-0 px-80'>
                    <label
                        className="mt-2 right-0  bg-white min-w-sm flex flex-col md:flex-row items-center  border py-1 px-2 rounded-3xl gap-2 shadow-5xl focus-within:border-gray-300"
                        htmlFor="small-input">

                        <input id="search-bar" placeholder="Faça sua pesquisa aqui"
                            className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white" />
                        <button
                            className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">

                            <div className="relative">
                                <div
                                    className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                                    <svg className="opacity-0 animate-spin w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            stroke-width="4"></circle>
                                        <path className="opacity-75" fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                        </path>
                                    </svg>
                                </div>

                                <div className="flex items-center transition-all opacity-1 valid:">
                                    <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                                        Search
                                    </span>
                                </div>

                            </div>

                        </button>
                    </label>
                </div>
            </div>
            {/*Body*/}
            
            <img className='h-8 w-[1920px]' src={line} alt="line" />
            <a
                className=" inline-block absolute  right-8   text-2xl rounded-full bg-white px-10 py-6  uppercase leading-none  text-red-500 hover:bg-gray-50 opacity-75" href="">
                New Task
            </a>

            {/*Blur*/}
            <div className="absolute left-[15rem] top-1/2 h-[350px] w-[700px] -translate-y-1/2 translate-x-1/2 rounded-full bg-red-300 opacity-50 blur-2xl  " />
            <div className='top-16'>
                <Sidebar />
            </div>
            <Outlet />
        </main>
    )
}

