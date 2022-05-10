import { regiUser,loginUser} from "../Type";
const initialState = {
    Data: [],
    List:[]
  };
 const Reducer = function (state = initialState, action) {
 console.log("reducer1-action",action)
 
    switch (action.type) {
      case regiUser:
        console.log("action-payload",action.payload)
        const Token=action.payload.token  
        localStorage.setItem("Token",Token);
        const mess=action.payload.message
        const id=action.payload.user.id
        localStorage.setItem("Id",id)
        return {
          ...state,
          Data:action.payload,
          message:mess
         
        }
      case loginUser:
        console.log("action-payload",action.payload)
        const token=action.payload.token
        localStorage.setItem("Token",token);
        const Id=action.payload.user.id
        localStorage.setItem("Id",Id)
        const message=action.payload.message
        return{
        ...state,
        List:action.payload,
        message:message

      }

        default: return state
    }
}
export default Reducer;

