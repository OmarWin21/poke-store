import React from 'react'

export default function singIng() {
  return (
    <div>
        <form>
            <label>Name :</label>
            <input type='input' placeholder='Name'></input>
            <br/>
            <br/>
            <label>Last Name :</label>
            <input type='input' placeholder='Last Name'></input>
            <br />
            <br />
            <label>Email :</label>
            <input type='input' placeholder='Email'></input>
              <br />
              <br />
            <label> Password:</label>
            <input type='password' placeholder='Password'></input>
              <br />
              <br />
              <button type='submit' style={{backgroundColor :'blue'}}>send</button>
            
        </form>
    </div>
  )
}
