// its somehow to similar function. 
// In pure function , we do not interact with oustside world like console.log or http request but it returns the same value. 
// In idempotent function , we do interact with oustside world like console.log or http request but it returns the same value. 

// how many time you will run this program this will return same output for same input value and its also interacting with outside AudioWorkletNode(in this case we are using console.log
const idempotent=num=>console.log(num)

idempotent(5)