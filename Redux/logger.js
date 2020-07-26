// Middlewares PArt 1
//   middlewares added custom functionality in to redux like logger , redux thunk. here we will learn about logger
// logger is extention between dispatch actoiny and reducer. It will print all info about redux app

const redux=require("redux")
const createStore=redux.createStore
const applymiddleware=redux.applyMiddleware
const reduxlogger=require("redux-logger")
const logger=reduxlogger.createLogger()
const BUY_CAKE="BUY_CAKE"

cakeState={
noOfCakes:0
}

function buyCake(){
    return {
        type: BUY_CAKE
    }
}

   const reducer=(state=cakeState,action)=>{
        switch(action.type){
            case BUY_CAKE:
                return{
                    ...state,
                    noOfCakes:state.noOfCakes+1
                }
            default: return state
               
        }
    }
   
    const store=createStore(reducer,applymiddleware(logger))
    console.log(reducer)
        console.log("InitialState",store.getState())
        const unsubscribe=store.subscribe(()=>{})
         store.dispatch(buyCake())
        unsubscribe()
    

