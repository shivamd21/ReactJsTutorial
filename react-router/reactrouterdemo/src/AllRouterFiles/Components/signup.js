import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Signup() {
    const [name,setname]=useState("Guest")
    const history=useHistory()
   function signin(){
        history.push(`/signin/${name}`)
    }
    return (
        <div>
           <h1>Welcome {name}</h1>
           Please enter your name to sign in <br/><br/>
           <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
           <button
               className="button"
               onClick={signin}>
              SignIn
           </button>
        </div>
    )
}

export default Signup
