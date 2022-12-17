import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import { firebaseAuth } from './firebase-config';
import Navbar from './NavBar';


import "./SignUpStyles.css";

const SignUp = () => {
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
   const navigate =useNavigate();
   
   const handleSubmit=async(e) =>{
    e.preventDefault();
     try{
        await createUserWithEmailAndPassword(firebaseAuth,email,password)
     }catch(error){
      console.log("Error :",error);
     }
    } 
    
    onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if (currentUser) navigate("/userid")
    })
    
    return (
      <>
      <Navbar/>
      <div className="form-Container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email"
         value={email}
         onChange={e => setEmail(e.target.value)
        }></input>
        <input type="password" placeholder="Password"
         value={password}
         onChange={e => setPassword(e.target.value)}></input>
        <button type="submit">Create Account</button>
        <p>Already have a account? <Link to ="/login">Sign In</Link></p>
      </form>
      </div>
</>
      
  )
}

export default SignUp;