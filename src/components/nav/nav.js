import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/pokeLogo.png'

export default function Nav() {
  return (
    <div>
        <nav style= {{backgroundColor : 'red'}}>
            <div className='left-side'>
                <Link to= '/' ><img src={logo} alt='pokelogo'/></Link>
            </div>
            <div className='right-side'>
                <ul>
                    <Link to='/cards'><li>Store</li></Link>
                   <Link to ='/singIng'><li>Sign In</li></Link>
                    <Link to ='/login' ><li>Login</li></Link>
                </ul>
            </div>
        </nav>
    </div>
  )
}

 