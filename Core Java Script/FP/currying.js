// function currying is type of function which can be nested at one level or multilevel. Main point is for function currying is that it will take only one argument at time 


// ques 1. how to multiply of 3 number with function currying

// const multiply=a=>b=>c=>a*b*c;

// two ways of calling function curry

// first way 
// console.log(multiply(4)(5)(6))
// second way 
// const m1=multiply(4)
// const m2=m1(5)
// const m3=m2(6)
// console.log(m3)


// multiply 10 numbers by function currying

// const multiply2=a=>b=>b?multiply2(a*b):a

// console.log(multiply2(1)(2)(3)(1)(2)(3)())
const kk=[]
function A(a,b,v){
    kk.push(a)
    kk.push(b)
    kk.push(v)
  console.log(kk)

}



A(1,2,3)
A(1,2,3)