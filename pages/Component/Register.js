import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Regiuser } from "../Redux/Action/Action1";
const Register = () => {

  const dispatch=useDispatch();
  const { register, handleSubmit } = useForm();
  const handleRegister=(data)=>{
      console.log("hh",data)
      dispatch(Regiuser(data))
      
  }
  return (
    <div>
      <form onSubmit={handleSubmit(handleRegister)}>
        <input
          type="email"
          name="email"
          placeholder="enter Email"
          {...register("email")}
        />
        <br></br>
        <input
          type="text"
          name="password"
          placeholder="Enter Password"
          {...register("password")}
        />
        <br></br>

        <input
          type="text"
          name="firstName"
          placeholder="Enter Confirmation Password"
          {...register("password_confirmation")}
        />
        <br></br>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
