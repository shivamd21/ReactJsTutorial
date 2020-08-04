// currying means presetting the  variable at the time of binding (in case of binding)  or passing the value to original function (in case of closure)

// 1. With bind
// let multiply=function(x,y){
//     console.log(x*y)
// }

// this is not currying we are passing all value, we need to pass some vlue to returned function
// let multiplybyBinding=multiply.bind(this,2,3)
// multiplybyBinding()


// this is currying ...where we are presetting the value
//  here x=2 and y will be set when we will returned functiom
// let multiplybyBinding=multiply.bind(this,2)
// multiplybyBinding(3)


// 2. with closure

let multiply= x =>{

    return  y =>{
    console.log(x*y)
    }
}

let multiplybyBinding=multiply(5)
multiplybyBinding(3)