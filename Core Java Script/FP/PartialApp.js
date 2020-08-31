

// Partial App is similar with functin currying. Only difference is that function currying take one argument at a time. But in Partial Application 
// we will take one argument at first , then rest of parameter will be assigned in next call


//  we wil see multiplication of 3 numbers by both methods i.e.  partial application and function currying

// first way--> Partial Application
const partial=(a,b,c)=>a*b*c;
//  here we are passing one argument first time
const getResult=partial.bind(null,5)
// and passing rest parameter next time
const res1=getResult(4,7)
console.log(res1)


// second way--> Function currying

const curry=a=>b=>c=>a*b*c;
const res2=curry(5)(4)(7)
console.log(res2)
partial()
curry()