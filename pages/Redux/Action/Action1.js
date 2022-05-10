import { loginuser, regiuser ,createpost,usertable} from "../Type"

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
export const CreateUser=(data)=>{
    
    return{
        type:createpost,
        data
    }
}
export const UserList=()=>{
  return{
      type:usertable
  }
}