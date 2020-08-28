const obj={name:"Harshit",Age:23}


function clone(obj){
   return {...obj}
    
}
// here original object is updated
// obj.name="shivam"
// console.log(clone(obj))
// console.log(obj)
// by this way we can create an immutable object
// one more way is there which is known as Strutcral sharing
function updated(obj){
    let ob=clone(obj)
    ob.name="shivam"
    return ob;
}

console.log(updated(obj))
console.log(obj)