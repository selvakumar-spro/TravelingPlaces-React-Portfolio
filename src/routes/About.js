import React from "react";
import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
const About = () =>{
    return(
        <div>
            <Navbar/>
             <Hero
             cName="hero-otherPage"
             heroImg={AboutImg}
             title="About"
            
             // buttonClass="hero-btn hide"
             />
             <AboutUs/>

             <Footer></Footer>
        </div>
    )
}


export default About;