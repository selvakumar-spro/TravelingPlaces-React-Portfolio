// import "TripStyles.css";
import React from "react";

function TripData(props){
    return(  
        <div className="trip-card">
           <div className="trip-image">
              <img src={props.image} alt="image"></img>
          </div>
           <h4>{props.title}</h4>
           <p>{props.text}</p>
        
        </div>
)
     
}
export default TripData;