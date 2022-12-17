import React from "react";
import "./HeroStyles.css";


const Hero = (props) =>{
    return(<>
        <div className ={props.cName}>
            <img src={props.heroImg} alt="No Image"></img>
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.buttonClass}>{props.buttonText}</a>
            </div>
        
        </div>
        </>
    )
}


export default Hero;