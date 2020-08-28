const fetch = require("node-fetch");
const urls=[' http://localhost:4000/mendress', 'http://localhost:4000/womendress',' http://localhost:4000/childrendress']

// async and await are made on top of promises. async and await will use together

// this will convert to promise
// Promise.all(urls.map(u=>{
//    return fetch(u).then(res=>res.json())
// })).then(values=>{
//     console.log(values[0])
//     console.log(values[1])
//     console.log(values[2])
// })
// .catch(err=>console.log("Somethig Went wrong"))

// here functio will run asynchrounously but code inside it will work synchronusly
// async function oneData(){
//     const res=await fetch( "http://localhost:4000/mendress")
//     const data=await res.json()
//     console.log(data)
// }
// oneData()
// error will handle with try catch block
async function allData(){

    try{
        const [mendress,womendress,childrendress]=await Promise.all(urls.map(u=>{
            return fetch(u).then(res=>res.json())
         }))
        
         console.log(mendress)
         console.log(womendress)
         console.log(childrendress)

    }catch(err){
        console.log("Something weny wrong")
    }

}
allData()

