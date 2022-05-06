
import { regiUser,loginUser} from "../Type";


const initialState = {
    Data: [],
  };
 const Reducer = function (state = initialState, action) {
 console.log("hh",action)
    switch (action.type) {
      case regiUser:
        console.log(action.payload)

        return {
        
          ...state,
          Data:action.payload
         
        }
      case loginUser:

      return{

      }

        default: return state
    }
}
export default Reducer;

