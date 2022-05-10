import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Loginuser } from "../Redux/Action/Action1";

const Login = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
   
  const data1=useSelector((state=>state.Reducer.message))

  const handleLogin = (data) => {

    dispatch(Loginuser(data));

  };
  useEffect(()=>{
    if(data1){
      window.location.href="/Component/DashBoard"
    }

  },[data1])

  return (
    <div className="menudiv">
     <section>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderradius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign in</h3>
                  <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                        {...register("email")}
                      />
                      <label className="form-label">Email</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        {...register("password")}
                      />
                      <label className="form-label">Password</label>
                    </div>

                    <div className="form-check d-flex justify-content-start mb-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="form1Example3"
                      />
                      <label className="form-check-label">
                        {" "}
                        Remember password{" "}
                      </label>
                    </div>

                    <button
                      className="btn btn-success btn-lg mb-1"
                      type="submit"
                    >
                      Login
                    </button>
                 
                  </form>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
