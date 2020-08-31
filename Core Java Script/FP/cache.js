
// first it will checheck in cache and if not present there , then it will perform action  and will store in cache. 
//  if it will present in cache, it will return from cache. This is very short example.
//  real use of cache can be seen in database operation which take so much time for each time. Once database operation is done it can be kept in cache and next time it can be accessed from caches

const storeinCache=()=>{
let cache={}
return (n)=>{
    if(n in cache){
        console.log("I am already here")
    
        return cache[n]
    }else{
        cache[n]=n+80
        console.log(":ooff took a very long time")
        return cache[n]
    }
}

}


const addto80=storeinCache()
console.log("first",addto80(78))
console.log("second",addto80(78))
console.log("third",addto80(78))