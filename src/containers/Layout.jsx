import React from 'react'
import Nav from '../components/nav/nav';

const Layout = ({ children }) =>{
    return(
        <div className='Layout'>
            <Nav />
            <br></br>
            <br></br>
            <br></br>
            {children}
        </div>
    );
}

export default Layout