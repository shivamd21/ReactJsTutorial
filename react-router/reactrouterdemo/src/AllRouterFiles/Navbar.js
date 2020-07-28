import React from 'react'
import {Link,Router} from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact/:id">Contact</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/signin">Signin</Link></li>
            </ul>
           
           bgvdghd
        </div>
    )
}

export default Navbar
