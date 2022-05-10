import axios from 'axios';
const instance = axios.create({
baseURL: 'https://react-rails-api-demo.herokuapp.com/api/v1',
header:{
  "Content-Type":"application/json",
}
});
instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('Token');
    config.headers.Authorization =  token ? ` ${token}` : '';
    return config;
  });
export default instance;


//Register-post-Api
export const RegisterPostApi=(data)=>{
  const body = {
    user: {
      email: data.email,
      password: data.password,
      password_confirmation: data.password_confirmation,
    },
  };
  return axios.request({
    method: "post",
    url: "https://react-rails-api-demo.herokuapp.com/api/v1/signup",
    data: body,
  });
}
//Login-Post-Api
export const loginPostApi=(data)=>{
  const body = {
    user: {
      email: data.email,
      password: data.password,
    },
  };
  return axios.request({
    method: "post",
    url: "https://react-rails-api-demo.herokuapp.com/api/v1/signin",
    data: body,
  });
}

//Create-post-Api
export const CreatePostApi=(data)=>{
  let token=localStorage.getItem("Token")
  const body = {
        "post":{
        title:data.title,
        description:data.description,
        user_id:data.user_id
        }
        }
        return axios.request({
        method:"POST",
        headers : {
        "Content-Type" : "application/json",
        "Authorization": token
        },
        url:"https://react-rails-api-demo.herokuapp.com/api/v1/posts",
        data:body
        })
}
export const UserListApi=()=>{
  let token=localStorage.getItem("Token")
  return axios.request({
    method:'GET',
    headers:{
      "Content-Type" : "application/json",
      "Authorization": token
    },
    url:"https://react-rails-api-demo.herokuapp.com/api/v1/posts"

    })
  
}
