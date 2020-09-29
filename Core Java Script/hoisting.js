
// in variable hoisting if variable is defined with var keyword only. if variable is defined with const or let, it wont support hoisting
// in function hoisting, if function keyword (function declaration) is there ,that function will support function hoistingimport React from 'react';
// if any function assigned to variable or arrow function(both also known as function expression), function expression do not support function hoisting

// console.log(b) //undefined
// var b=80;
// var b
// console.log(b) // undefined
// b=80;
// var b
// b=80;
// console.log(b) // 80



// let b
// b=80;
// console.log(b) //80


// console.log(b)// referenced error
// let b

// let b
// console.log(b)// undefined

// hoisting does not work with let and const
// let b
// console.log(b)// undefined
// b=80

// function declaration
// US()  supporst function hoist
//  India() will give error does not support function hoisting. In creation phase, variable india will define and its value will be undefined . it can not be use as function call



// function declaration 
// function US(){
//     console.log("Cold")
// }
// // function expression
//  var India=()=>{
//      console.log("very hot")
//  }

//  function expression  doesnot support hoisting because it assigned at run time whereas on the other side function declaration does support 

// if function name is same and arguments are different or same ,2nd  function will overwrite the 1st function at the time of hoisting. (Overloading wont happen) therefore at the end last function declartaion or expression will work

function twins(a){
    console.log("Original"+a)
}
function twins(a,b){
    console.log("firs copy"+a+"kk"+b)
}
// only this will work
var twins=function (a){
    console.log("second copy"+a)
}

twins(12,8)