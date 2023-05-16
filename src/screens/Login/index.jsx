import inferiorDireito from '../../assets/Vector.png'
import inferiorEsquerdo from '../../assets/Vector-1.png'
import superiorDireito from '../../assets/Vector-3.png'
import superiorEsquerdo from '../../assets/Vector-2.png'
import logo from '../../assets/focus-sprinter-logo.png'
import './style.css'



export default function Login(){
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
                <h3>Welcome</h3>
                <div className="input">
                    <label htmlFor="login">Login:</label>
                    <input type="text" name="login" id="" />
                </div>
                <div className="input">
                    <label htmlFor="password">Senha:</label>
                    <input type="text" name="password" id="" />
                </div>
                <button>Entrar</button>
                <p>Não tem cadastro? <a href="">Faça já</a></p>
            </div>
        </div>
    )
}