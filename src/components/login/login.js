import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
        <div className='login'>
            <div className= 'container'>
            <form>
                <label for= 'email' className='label'>Email</label>
                <input type= 'text' placeholder='example@example.com' className='input-e'/>

                <label for= 'password' className='label'>Password</label>
                <input type= 'password' placeholder='******' className='input-pass'/>
            
                <input type='submit' value= 'Send' className='l-button' />
                <h5>Forgot your password?</h5>
            </form>

            <Link to='/singIng'><button className='su-button'>Sign up</button></Link>
            </div>
        </div>

    </div>
  )
}
