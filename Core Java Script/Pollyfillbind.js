// // this is done with array destrucring with call not apply method...only for call not for apply
// let myProfile=function ([state,country]){
//     console.log("My name is "+this.firstname+" . I am "+this.age+" years Old. I live in "+state+" , "+country)
// }

let myProfile=function (state,country,language){
    console.log("My name is "+this.firstname+" . I am "+this.age+" years Old. I live in "+state+" , "+country+" I Speak "+language)
}


let employee1={
    firstname:"Cristiano Ronaldo",
    age:35
}
let playerProfile = myProfile.bind(employee1,"Madrid","Spain")
playerProfile()

// Pollyfill bind means to create your own bind function if ,in case, browser does not have their own bind function . this is knd of browswe call back

Function.prototype.mybind=function(...args){
let obj =this
console.log(obj)
console.log(args)
params=args.slice(1)
console.log("hjn",params)
return function(...args2){
    // if we are passing only one arguments(other than this object )
    // this you can use array in call method destructuring without apply
    // obj.call(args[0],[...params,...args2])
    console.log(args2)
    // if we are passing more than 1  one arguments(other than this object )
    obj.apply(args[0],[...params,...args2])
}
}



let playerProfile2 = myProfile.mybind(employee1)
playerProfile2("Madrid","Spain","Sapanish")