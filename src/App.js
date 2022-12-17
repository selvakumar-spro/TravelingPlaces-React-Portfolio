import React from 'react';
import './App.css';
import {Route,Routes} from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import Login from './components/Login';
import UserId from './components/UserId';
import SignUp from './components/SignUp';
function App() {
  return (
  <div>
    <Routes>
      <Route exact path='/' element ={<Home/>}/>
      <Route exact path='/about' element ={<About/>}/>
      <Route exact path='/service' element ={<Service/>}/>
      <Route exact path='/contact' element ={<Contact/>}/>
      <Route exact path='/login' element ={<Login/>}/>
      <Route exact path='/signup' element ={<SignUp/>}/>
      <Route exact path='userid' element ={<UserId/>}></Route>


    </Routes>
    
    </div>
  );
}

export default App;
