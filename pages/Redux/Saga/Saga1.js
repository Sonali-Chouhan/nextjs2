import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { regiuser, regiUser, loginUser, loginuser, createPost, createpost, userTable, usertable } from "../Type";
import { RegisterPostApi ,loginPostApi,CreatePostApi, UserListApi} from "../../api/base";

//Registered-post-Action
function* Registerapi(action) {
  try {
    const res = yield call(RegisterPostApi, action.data);

    yield put({
      type: regiUser,
      payload: res.data,
    });
  } catch (e) {
    console.log(e.message);
  }
}
//Login-post-Action
function* Loginapi(action) {
  try {
    const res = yield call(loginPostApi, action.data);

    yield put({
      type: loginUser,
      payload: res.data,
    });
  } catch (e) {
    console.log(e.message);
  }
}
//Create-post-Action
function* Createpost(action){
  try{
    const res=yield call(CreatePostApi,action.data);
   
    yield put({
      type:createPost,
      payload:res.data
    });
  }catch(e){
    console.log(e.message);
  }
 
}
//User-List-Action
function* Userlist(){
  try {
    const data = yield call(UserListApi)
    yield put ({
        type:userTable,
        payload:data
    })
    
} catch (e) {
  console.log(e.message)
  }
}


  export default function* Datasend() {
  yield takeEvery(regiuser, Registerapi);
  yield takeEvery(loginuser, Loginapi);
  yield takeEvery(createpost,Createpost);
  yield takeEvery(usertable,Userlist)
}

    
  