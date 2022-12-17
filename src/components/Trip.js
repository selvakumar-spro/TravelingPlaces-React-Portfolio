import React from "react";
import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/indonesia.jpg";
import Trip2 from "../assets/france.jpg";
import Trip3 from "../assets/malaysia.jpg";

const Trip =() =>{
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destination using Google Map</p>
            <div className="trip-data">
              <TripData
               image={Trip1}
               title="Trip In Indonesia"
               text ="Thank the gods that Bali was sprung from the sea it gives you a chance to explore stunning and unique landscapes. Visit the West Bali National Park which contains within its green embrace, savannahs, rainforests and mangroves. Otherwise, explore the wilderness under the sea, when you visit Menjangan Island with its pristine waters and bustling coral reefs."
               />
            

           
              <TripData
               image={Trip2}
               title="Trip In France"
               text ="The symbol of Paris, the Eiffel Tower is a feat of ingenuity as much as it is a famous landmark. This structure of 8,000 metallic parts was designed by Gustave Eiffel as a temporary exhibit for the World Fair of 1889. Originally loathed by critics, the 320-meter-high tower is now a beloved and irreplaceable fixture of the Paris skyline."             />
           

           
              <TripData
               image={Trip3}
               title="Trip In Malaysia"
               text ="The tallest twin towers in the world, the Petronas reach an impressive 452 meters high up into the clouds. The towers are 88 floors tall and have an impressive total of 76 elevators. Hike the cool highlands of Ubud , sit in contemplation on the shores of Buyan and Tambligan lakes. Make your way into the interiors of Bali’s jungles to marvel at the waterfalls of Gigit and Singsing."/>
            </div>
        </div>

    )
}
export default Trip;