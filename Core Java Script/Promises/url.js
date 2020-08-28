const fetch = require("node-fetch");
const urls=[' http://localhost:4000/mendress', 'http://localhost:4000/womendress',' http://localhost:4000/childrendress']


Promise.all(urls.map(u=>{
   return fetch(u).then(res=>res.json())
})).then(values=>{
    console.log(values[0])
    console.log(values[1])
    console.log(values[2])
})
.catch(err=>console.log("Somethig Went wrong"))