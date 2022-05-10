import React,{useState,useEffect} from "react";
import { useForm } from "react-hook-form";
import DashBoard from "./DashBoard";
import { useDispatch,useSelector } from "react-redux";
import { CreateUser } from "../Redux/Action/Action1";

const Createpost = () => {

  const [id,setid]=useState()

  const dispatch=useDispatch();

  const { register, handleSubmit } = useForm();

  const Createpost = (data) => {
    data["user_id"] = id;
    console.log("1", data);
    dispatch(CreateUser(data))
  };
   useEffect(()=>{
    if (typeof window !== 'undefined') {
      var item=id
      item=localStorage.getItem("Id")
      setid(item)
      }
 

  },[id])

  return (
    <div>
        <DashBoard/>
      <section>
        <div className="col-xl-6">
          <div className="card-body p-md-5 text-black">
            <h3 className="mb-5 text-uppercase">Create-Posts</h3>
            <form onSubmit={handleSubmit(Createpost)}>
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <input
                    type="text"
                    {...register("title")}
                    id="form3Example1m"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label">Title</label>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <input
                    type="text"
                    {...register("description")}
                    id="form3Example1n"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label">Description</label>
                </div>
              </div>

              <button type="submit" className="btn btn-warning btn-lg ms-2">
                Submit form
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Createpost;
