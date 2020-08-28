// There are 2 Properties of Pure Function
// 1. Refrential transperency=> For same input data , output will be same.
// 2. function should not change the global variable or should not leave any impact on oustside of that function (for ex. window,Dom ...etc)

arr=[1,2,3,4,5]

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// this is impure function because it changes outside variable (in this case arr)
// function impureFunction(arr){
//     arr.pop()
// }

// impureFunction(arr)
// change outside variable
// console.log(arr)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// this is pure function because it does not  changes outside variable (in this case arr)
// function FirstpureFunction(arr){
//    const newArr= [].concat(arr)
//    newArr.pop()
//    return newArr
// }
// console.log(FirstpureFunction(arr))
// unchanged outside variable
// console.log(arr)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// this is pure function because it gives same output for same input

// function SecondpureFunction(n1,n2){
//     return n1+n2;
// }
// console.log(SecondpureFunction(4,3))

// Trickey Ques

// this is also impure function because console.log also changes outside of function (int this case he is manipulating DOM)
function hi(){
    console.log("hi")
}

hi()