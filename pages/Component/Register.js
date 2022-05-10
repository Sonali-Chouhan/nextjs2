import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Regiuser } from "../Redux/Action/Action1";
import Link from "next/link";
const Register = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const datas = useSelector((state) => state.Reducer.message);

  const handleRegister = (data) => {
    console.log("registered-data", data);

    dispatch(Regiuser(data));
  };
  useEffect(() => {
    if (datas) {
      window.location.href = "/Component/Login";
    }
  }, [datas]);
  return (
    <div>
      {/* <form onSubmit={handleSubmit(handleRegister)}>
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
      </form> */}

      <section
        className="formdiv"
        // style={{
        //   background:
        //     "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",}}
        
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderradius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form onSubmit={handleSubmit(handleRegister)}>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          {...register("email")}
                        />
                        <label className="form-label">Your Email</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          {...register("password")}
                        />
                        <label className="form-label">Password</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                          {...register("password_confirmation")}
                        />
                        <label className="form-label">
                          Repeat your password
                        </label>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label className="form-check-label">
                          I agree all statements in{" "}
                          <a href="#!" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-info btn-lg btn-block" 
                        >
                          Register
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?
                        <Link
                          href="/Component/Login"
                          className="fw-bold text-body"
                        >
                          <u>Login here</u>
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
