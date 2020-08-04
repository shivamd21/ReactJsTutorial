function getClicked(){
    console.log("Clicked")
}

function doSomemagic(fn,delay){
    let timer
return (...args)=>{
    if(timer){

        clearTimeout(timer)
        console.log("clicked within time interval")
    }
   timer= setTimeout(()=>{
        fn.apply(this,args)
    },5000)

}
}
let betterFunctionDebouncing=doSomemagic(getClicked,2000)