import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/pokeLogo.png'
import './nav.css'

export default function Nav() {
  return (
    <div>
        <nav style= {{backgroundColor : 'red'}}>
            <div className='left-side'>
                <Link to= '/' className='logoLink'><img src={logo} alt='pokelogo' className='pokeLogo' /></Link>
            </div>
            <div className='right-side'>
                <ul>
                    <Link className='navLink' to='/cards'><li>Store</li></Link>
                   <Link className='navLink' to ='/singIng'><li>Sign In</li></Link>
                    <Link className='navLink' to ='/login' ><li>Login</li></Link>
                </ul>
            </div>
        </nav>
    </div>
  )
}

 