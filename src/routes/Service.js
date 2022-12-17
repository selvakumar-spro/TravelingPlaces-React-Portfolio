import React from "react";
import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import ServiceImg from "../assets/1.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
const Service = () =>{
    return(
        <div>
           <Navbar/>
             <Hero
             cName="hero-otherPage"
             heroImg={ServiceImg}
             title="Service"
            
            //buttonClass="hero-btn hide"
            />
            <Trip></Trip>
            <Footer></Footer>
        </div>
    )
}


export default Service;