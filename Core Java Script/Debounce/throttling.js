function getClicked(){
    console.log("Clicked")
}

function doSomemagic(fn,delay){
    let last=0
return (...args)=>{
    let now=new Date().getTime()
    
    if(now-last<delay){
        // console.log("clicked with in time interval")
        return;
    }
    last=now;
    fn.apply(this,args)
   

}
}
let betterFunctionThrottling=doSomemagic(getClicked,5000)