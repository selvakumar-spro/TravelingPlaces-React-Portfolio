import React from "react";
import "./FooterStyles.css";

const Footer = () =>{
    return(
        <div className="footer"> 
           <div className="top">
            <div>
                <h1>Trippy</h1>
                <p>Choose Your favourite Destination</p>
            </div>
               <div>
                  <a href="/"><i className="fa-brands fa-facebook-square"></i></a>
                  <a href="/"><i className="fa-brands fa-instagram-square"></i></a>
                  <a href="/"><i className="fa-brands fa-twitter-square"></i></a>
               </div>
           </div>
           
           <div className="bottom">
            <div>
                <h4>Project</h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">All version</a>
            </div>
            <div>
                <h4>Community</h4>
                <a href="/">GitHub</a>
                <a href="/">Issues</a>
                <a href="/">Project</a>
                <a href="/">Twitter</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href="/">Support</a>
                <a href="/">TroubleShooting</a>
                <a href="/">Contact Us</a>
                
            </div>
            <div>
                <h4>Terms Of Service</h4>
                <a href="/">Privacy</a>
                <a href="/">Policy</a>
              
                
            </div>
           </div>
        </div>
      
    )

}

export default Footer;