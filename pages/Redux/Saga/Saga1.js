import { call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import { regiuser,regiUser,loginUser,loginuser } from '../Type';
import instance from '../../api/base';

function getPostApi(data){
    
  const body = {
    "user":{
    "email":data.email,
    "password":data.password,
    "password_confirmation":data.password_confirmation
    }
    }
    return axios.request({
    method:"post",
    url:"https://react-rails-api-demo.herokuapp.com/api/v1/signup",
    data:body
    })
    }

    function* Registerapi(action){
       
    
    try {
        const res = yield call(getPostApi,action.data)
        
        yield put ({
            type:regiUser,
            payload:res.data
        })
       
    } catch (e) {
      console.log(e.message)
      }
    }
   

    function loginPostApi(data){
    
        const body = {
          "user":{
          "email":data.email,
          "password":data.password,
         
          }
          }
          return axios.request({
          method:"post",
          url:"https://react-rails-api-demo.herokuapp.com/api/v1/signin",
          data:body
          })
          }
      

function* Loginapi(action){
    
        try {
            const  res = yield call(loginPostApi,action.data)
            
            yield put ({
                type:loginUser,
                payload:res.data
            })
           
        } catch (e) {
          console.log(e.message)
          }
         }   


export default function* Datasend(){
    yield takeEvery(regiuser,Registerapi);
    yield takeEvery(loginuser,Loginapi);
}