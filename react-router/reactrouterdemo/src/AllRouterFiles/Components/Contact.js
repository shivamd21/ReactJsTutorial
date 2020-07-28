import React from 'react'
import { useParams } from 'react-router-dom'

function Contact(props) {
    // name should be as given in parameter
    const {id}=useParams()
    return (
        <div>
             <h1>I am from Contact:-{id}</h1>
        </div>
    )
}

export default Contact

// import React, { Component } from 'react'

//  class Contact extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
             
//         }
//     }
//     handleClick=()=>{
// console.log(this.props)
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>from contact</h1>
                
//              <h2>{this.props.match.params.id}</h2>
               
//             </div>
//         )
//     }
// }

// export default Contact
