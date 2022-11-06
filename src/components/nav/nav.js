import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
        <nav style= {{backgroundColor : 'red'}}>
            <div className='left-side'>
                <img src='../img/pokeLogo '/>
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

 