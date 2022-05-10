import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import DashBoard from "./DashBoard";
import { UserList } from "../Redux/Action/Action1";
import { useDispatch, useSelector } from "react-redux";

const Usertable = () => {

  const dispatch=useDispatch();

  const Record=useSelector((state)=>state?.reducer?.User?.data?.posts)

  console.log("record",Record)

  const handleDelete = () => {};

  const handleShow = () => {};

  useEffect(()=>{
    dispatch(UserList());
  },[])

  return (
    <div>
      <DashBoard/>
       <h1>Table</h1>
      <Table striped bordered hover variant="dark">
       
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>User_Id</th>
            <th>Created_At</th>
            <th>Updated_At</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {Record?.map((x, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{x.id}</td>
                <td>{x.title}</td>
                <td>{x.description}</td>
                <td>{x.user_id}</td>
                <td>{x.created_at}</td>
                <td>{x.updated_at}</td>
              
                <td>
                  <Button onClick={() => handleDelete()}>Delete</Button>
                </td>
                <td>
                  <Button onClick={() => handleShow()}>Show</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Usertable;
