function getPostApi(data){
    // console.log("getPostapi",data)
    
    // const token = localStorage.getItem('user-token');
    // console.log("user-token", token)
    
    // const user_id = localStorage.getItem('user-id');
    // console.log("user-id", user_id)
    
    const body = {
    "post":{
    "title":data.title,
    "description":data.description,
    "user_id": user_id
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
    // const handelfathch = () =>{
    //     //   axios.get("https://jsonplaceholder.typicode.com/posts")
    //     //   .then((response) => {
    //     //      console.log(111, response)
    //     //      setlist(response.data)
    //     //    })
        
    //     // }
    // try {
        
    //     let response = yield call(instance.post,"/signup",action.data)
    //     //  const response = yield fetch("https://react-rails-api-demo.herokuapp.com/api/v1/signup", {
    //     //     method: 'POST',
    //     //     body:JSON.stringify(action.data)
    //     //   })
        
    //     const data = yield call(instance.post,"/signup",action.data)
    //     yield put ({
    //         type:regiUser,
    //         payload:response
    //     })
       
    // } catch (e) {
    //   console.log(e.message)
    //   }
    // }
    
    