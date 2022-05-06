import { loginuser, regiuser } from "../Type"

export const Regiuser=(data)=>{

    
    return{
        type:regiuser,
        data
    }
}
export const Loginuser=(data)=>{
    
    return{
        type:loginuser,
        data
    }
}