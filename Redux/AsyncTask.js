// here i will use redux thunk middleware . which helps in creating action creator for networking app
const redux=require("redux")
const applymiddleware=redux.applyMiddleware
const thunkmiddleware=require("redux-thunk").default
const createstore=redux.createStore
const axios=require("axios")

const FETCH_USER_REQUEST="FETCH_USER_REQUEST"
const FETCH_USER_SUCCESS="FETCH_USER_SUCCESS"
const FETCH_USER_FALIURE="FETCH_USER_FALIURE"

const initialstate={
loading:false,
users:[],
error:''
}

const fetchuserrequest=()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}

const fetchusersuccess=user=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:user
    }
}

const fetchuserfaliure=error=>{
    return{
        type:FETCH_USER_FALIURE,
        payload:error
    }
}

const reducer=(state=initialstate,action)=>{
    switch(action.type){
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading:true
            }
            case FETCH_USER_SUCCESS:
                return{
                   
                    loading:false,
                    users:action.payload,
                    error:''
                }
                case FETCH_USER_FALIURE:
                    return{
                       
                        loading:false,
                        users:[],
                        error:action.payload
                    }

                    default : return state
    }
}

const fetchusers=()=>{
    return function(dispatch){
        dispatch(fetchuserrequest())
        axios.get("http://localhost:3001/posts")
        .then(response=>{
           
            const users=response.data.map(user=>user.id)
            console.log(users)
            dispatch(fetchusersuccess(response.data))
      
        })
        .catch(error=>{
           
            dispatch(fetchuserfaliure("ERROR:- something went wrong"))
      
        })

    }
}
const store=createstore(reducer,applymiddleware(thunkmiddleware))
const unsubscribe=store.subscribe(()=>console.log("Updated State",store.getState()))
store.dispatch(fetchusers())
unsubscribe()
      