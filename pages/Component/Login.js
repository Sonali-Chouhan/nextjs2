import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Loginuser } from '../Redux/Action/Action1';

const Login = () => {
 
  const dispatch=useDispatch();
 const {register ,handleSubmit} =useForm();
 const handleLogin=(data)=>{
   dispatch(Loginuser(data))
   
 }
  return (
    <div className='formDiv'>
      <form onSubmit={handleSubmit(handleLogin)}>
        <input type="text" name="email" placeholder='Enter Email' {...register("email")}/><br></br>
        <input type="password" name="password" placeholder='Enter Password' {...register("password")}/><br></br>
        <input type="submit" />
      </form>
    </div>
    
  )
}

export default Login