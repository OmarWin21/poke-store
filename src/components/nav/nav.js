import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/pokeLogo.png'

export default function Nav() {
  return (
    <div>
        <nav style= {{backgroundColor : 'red'}}>
            <div className='left-side'>
                <img src={logo} alt='pokelogo'/>
            </div>
            <div className='right-side'>
                <ul>
                    <li>Store</li>
                    <li>Sign In</li>
                    <li>Login</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

 