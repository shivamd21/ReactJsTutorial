const redux=require("redux")
const createStore=redux.createStore
const combineReducer=redux.combineReducers
const BUY_CAKE="BUY_CAKE"
const BUY_ICECREAM="BUY_ICECREAM"

// without combinereducer
// initialstate={
// noOfCakes:10,
// noOfIceCream:20
// }

IceCreamState={
    noOfIceCream:20
    }

cakeState={
    noOfCakes:10
        }

    function buyCake(){
        return {
            type: BUY_CAKE
        }
    }
    function buyIcecream(){
        return {
            type: BUY_ICECREAM
        }
    }

// this is without combined reducers
    // const reducer=(state=initialstate,action)=>{
    //     switch(action.type){
    //         case BUY_CAKE:
    //             return{
    //                 ...state,
    //                 noOfCakes:state.noOfCakes-1
    //             }
    //             case BUY_ICECREAM:
    //             return{
    //                 ...state,
    //                 noOfIceCream:state.noOfIceCream-1
    //             }
    //         default: return state
               
    //     }
    // }

    const cakereducer=(state=cakeState,action)=>{
        switch(action.type){
            case BUY_CAKE:
                return{
                    ...state,
                    noOfCakes:state.noOfCakes-1
                }
               
            default: return state
               
        }
    }
    const icecreamreducer=(state=IceCreamState,action)=>{
        switch(action.type){
          
                case BUY_ICECREAM:
                return{
                    ...state,
                    noOfIceCream:state.noOfIceCream-1
                }
            default: return state
               
        }
    }

    //  this is how to define combine rdducer

    const rootreducer=combineReducer({
        cake:cakereducer,
        iccream:icecreamreducer
    })
    // this is without combinereducer
    // const store=createStore(reducer)

    const store=createStore(rootreducer)
        console.log("InitialState",store.getState())
        const unsubscribe=store.subscribe(()=>console.log("Updated State",store.getState()))
        store.dispatch(buyCake())
        store.dispatch(buyCake())
        store.dispatch(buyIcecream())
        store.dispatch(buyIcecream())
        unsubscribe()
    

