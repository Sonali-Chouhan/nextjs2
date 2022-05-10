import { combineReducers } from "redux";
import Reducer from "./Reducer1";
import reducer from "./Reducer2";
const rootreducer=combineReducers({
    Reducer,
    reducer
    
})
export default rootreducer;