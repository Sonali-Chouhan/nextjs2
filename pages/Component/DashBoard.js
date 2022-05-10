import { useRouter } from 'next/router';
import React from 'react';
import { Button } from 'react-bootstrap';

const DashBoard = () => {

  const router=useRouter();
  
  const handleLogout=()=>{
    localStorage.removeItem("Token")
    localStorage.removeItem("Id")
    window.location.href="/"
  }
  
  return (
    <div className='dashboard'>
      <Button variant="outline-info" onClick={()=>router.push("/Component/Createpost")}>Create-Post</Button><br/><br/>
      <Button variant='outline-success' onClick={()=>router.push("/Component/Usertable")}>User-Table</Button><br/><br/>
      <Button variant='outline-warning' onClick={()=>handleLogout()}>Logout</Button>
      </div>
  )
}

export default DashBoard;