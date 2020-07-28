// import React from 'react'
// import { useParams } from 'react-router-dom'

// function Signin() {
//     const {username}=useParams()
//     return (
//         <div>
//             <h1>Welcome {username}</h1>
//         </div>
//     )
// }

// export default Signin

import React, { Component } from 'react'

class Signin extends Component {
    render() {
        return (
            <div><h1>  Welcome {this.props.match.params.username}
            </h1>
            </div>
        )
    }
}

export default Signin

