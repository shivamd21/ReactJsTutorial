const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "Promise1")
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Promise2")
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Promise3")
})
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Promise4")
})

// all method take array of promises and return the value in order i.e. first it will return value of promise which is at start index then first index and so on... if any promise is taking time, it will wait. After completing all promise then it will only return the value
Promise.all([promise1,promise2,promise3,promise4])
.then(res=>console.log(res))
.catch(err=>console.log(err))