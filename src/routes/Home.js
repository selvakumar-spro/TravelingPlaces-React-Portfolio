import React from "react";
import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import HomeImg from "../assets/4.jpg";

const Home = () =>{
    return(
        <div>
            
              <Navbar/>
              <Hero
              cName="hero"
              heroImg={HomeImg}
              title="Your Journey Your Story"
              text="Choose Your Favourite Destination"
              buttonText="Travel Plan"
              url="/"
              buttonClass="hero-btn"
              />
              <Destination></Destination>
              <Trip></Trip>
              <Footer></Footer>


        </div>
         )
}


export default Home;