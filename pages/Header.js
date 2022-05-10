import React from 'react';
import Link from 'next/link'

const Header = () => {
 
  return (
    <>
    
    
      
    <div className='header'>
    <Link href="/">Home</Link> {""}
    <Link href="/Component/Login">Login-Form</Link>
    <Link href="/Component/Register">Register-Form</Link>
    <Link href="/Component/DashBoard">DashBoard</Link>

    
    
    </div>

    
        
    
    </>
  )
}

export default Header