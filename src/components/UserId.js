import { onAuthStateChanged,signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { firebaseAuth } from './firebase-config';
import { useNavigate } from 'react-router';
import "./userIdStyle.css";
import Navbar from './NavBar';
const UserId = () => {
    const navigate = useNavigate();
    const [user,setUser]=useState(undefined);
    
    onAuthStateChanged(firebaseAuth,(currentUser)=>{
        if(currentUser)setUser(currentUser)
         else navigate("/login")
       }  )
   
  return (
    <>
      <Navbar/>
      <div>
        <div className='user-profile' >
        <h4>Email : {user?.email}</h4>
        <button onClick={() => signOut(firebaseAuth)}>sign Out</button>
        </div>
      </div>
  </>
    
  )
}

export default UserId