import React from "react";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
const Usertable = () => {
    
  const data = [];

  const handleDelete = () => {};

  const handleShow = () => {};

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((x, index) => {
            return (
              <tr key={index}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
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
