import React from 'react'
import logo from '../../components/img/pokestorelogo.png'
import '../../styles/login.css'

const Login = () => {
    return(
        <div className='Login'>
            <div className="Login-container">
                <img src={logo} alt='PokeLogo' className='logo'/>
                <form action="/" className="form">
                    <label htmlFor="email" className="label">Correo electronico</label>
                    <input type='text' id='email' placeholder='ejemplo@ejemplo.com' className='input input-email' ></input>
                    <label htmlFor="password" className="label">Contraseña</label>
                    <input type="password" placeholder='******' id="password" className="input input-password" />
                    <input type="submit" value="Log in" className="primary-button login-button"/>
                    <a href="/">Olvidé mi contraseña</a>
                </form>
                <button className="secondary-button signup-button">Ingresar</button>
            </div>
        </div>
    );
}

export default Login