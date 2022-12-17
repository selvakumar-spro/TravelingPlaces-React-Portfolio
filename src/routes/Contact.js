import React from "react";
import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import ContactImg from "../assets/home.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
const Contact= () =>{
    return(
        <div>
           <Navbar/>
             <Hero
             cName="hero-otherPage"
             heroImg={ContactImg}
             title="Contact"
            
             
           
            // buttonClass="hero-btn hide"
             />
             <ContactForm></ContactForm>
             <Footer></Footer>

        </div>
    )
}


export default Contact;