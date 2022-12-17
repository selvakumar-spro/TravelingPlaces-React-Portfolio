import { signInWithEmailAndPassword ,onAuthStateChanged} from 'firebase/auth';
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { firebaseAuth } from './firebase-config';
import "./SignUpStyles.css";
import Navbar from './NavBar';



const Login = () => {
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const navigate= useNavigate();

const handleSubmit=async(e) =>{
  e.preventDefault();
    try{
       await signInWithEmailAndPassword(firebaseAuth,email,password)
    }catch(error){
     console.log("Error :",error);
    }
 } 
 onAuthStateChanged(firebaseAuth,(currentUser)=>{
   if (currentUser) navigate("/userid")
 })






  return (
   <>
   <Navbar></Navbar>
   <div className="form-Container">
    <h1>Log In</h1>
    <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" 
        value={email}
         onChange={e => setEmail(e.target.value)
        }></input>
        <input type="password" placeholder="Password"
         value={password}
         onChange={e => setPassword(e.target.value)}></input>
        <button type="submit">Submit</button>
        <p>I don't have an account? <Link to ="/signup">SignUp</Link></p>
    </form>
    </div>
    </>
   
  )
}

export default Login;