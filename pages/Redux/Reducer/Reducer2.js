import { createPost, userTable } from "../Type"

const initialState={
    User:[]
}
 const reducer=function(state=initialState,action){
     console.log("reducer-2-Action",action)
     switch(action.type){
        
        case createPost:
             return{
                 ...state,
                 User:action.payload
             }
        case userTable:
             
            return{
                ...state,
                User:action.payload
            } 
        default: return state
     }
 }
 export default reducer;