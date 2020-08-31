// const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require("constants")

// Compose and pipe are used to run the sequence of function. Both compose and pipe eill take the function as argument and run the passed function 
// from left to right or right to left. 
// in pipe we run functin from left to right.
// in Compose we run functin from right to left.

// example --> we will take a negative value as argument we will perform three operation. 
// 1. Convert negative value to positive
// 2. multiply positive value by 5
// 3. square the value after multiplying by 5


const convertToPositive=num=>Math.abs(num)
const multiplyBy5=num=>num*5;
const squareConverter=num=>Math.sqrt(num)
// console.log(convertToPositive(-100))
// console.log(multiplyBy5(100))
// console.log(squareConverter(100))
// here it is compose, because left to right excution is happening. First function p(present in extereme left) will execute , then after m  and then after s
const compose=(s,m,p)=>data=>s(m(p(data)))

// here it is compose, because right to left excution is happening. First function p(present in extereme right) will execute , then after m  and then after s
const pipe=(p,m,s)=>data=>s(m(p(data)))
// const getResult=compose(squareConverter,multiplyBy5,convertToPositive)

const getResult=pipe(convertToPositive,multiplyBy5,squareConverter)
console.log(getResult(-20))