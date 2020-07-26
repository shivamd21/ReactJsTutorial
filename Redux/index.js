const redux=require("redux")
const createStore=redux.createStore
const BUY_CAKE="BUY_CAKE"

// this is how to define state
cakeState={
noOfCakes:0
}

// this is how to create action creator which returns action. Action is object which must have "type" variable
function buyCake(){
    return {
        type: BUY_CAKE
    }
}

// this is reducer when any action come into picture it comes to reduces which takes initial state and action and manipulate state accordingly
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
    // this is store which is only one in one application. It takes reducer or combined reducers(when more than one reducer is there, see in file index2.js)
    const store=createStore(reducer)
    console.log(reducer)
        console.log("InitialState",store.getState())
        // this is how to subscribe the store to change and get data from store
        const unsubscribe=store.subscribe(()=>{console.log("Updated State",store.getState())})
        // this is how to pass action to store and reducer will take care of actions and change state accordingly
        store.dispatch(buyCake())
        unsubscribe()
    

