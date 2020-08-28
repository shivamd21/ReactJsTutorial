const promise=new Promise((resolve,reject)=>{

    if(true){
        resolve("Correct Output")
    }else{
        reject("error in promise")
    }
})


// functiomn returns the/ promise
function myfunc(data){

    return new Promise((resolve,reject)=>{

        if(true){
            resolve("it is resolved"+data)
        }else{
            reject("not resoved")
        }
    })
}

// simple
// promise
// .then(res=>console.log("from then",res))
// .catch(err=>console.log("from error",err))





// with chaining
// without error
// promise
// .then(res1=> res1 + " 1 ")
// .then(res2=> res2 + " 2 ")
// .then(res3=>console.log( res3 + " 4 "))
// .catch(err=>console.log("from error",err))




// With error 
// part 1--> when catch statment is called after error haapening, then it will hadle only handle method , created by user.
// promise
// .then(res1=> res1 + " 1 ")
// .then(res2=> {
//     throw Error
//     res2 + " 2 "
// })
// .then(res3=>console.log( res3 + " 4 "))
// .catch(err=>console.log(console.log("Something went wrong")))






// part 2=>  when catch statment is called before error haapening, then it will handle by Javascript.
// promise
// .then(res1=> res1 + " 1 ")
// .catch(err=>console.log(console.log("Something went wrong")))
// .then(res2=> {
//     throw Error
//     res2 + " 2 "
// })
// .then(res3=>console.log( res3 + " 4 "))



// Part 3--> if error wont happen, then catch statment is never goona execute . It does not matter where it is placed either in between chain or at end
// promise
// .then(res1=> res1 + " 1 ")
// .catch(err=>console.log(console.log("Something went wrong")))
// .then(res2=>res2 + " 2 ")
// .then(res3=>console.log( res3 + " 4 "))



// // functiomn returns the/ promise
// myfunc("hey")
// .then(res=>console.log("from then",res))
// .catch(err=>console.log("from error",err))


//  KEYPOINT--> Promise will return value if and only if all promises are resolved . If any one of the promise, in chaining or in all method, throw error, it will throw error