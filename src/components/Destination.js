import React from "react";
import"./DestinationStyles.css";
import DestinationData from "./DestinationData";
import Yercaud1 from"../assets/yercaud1.jpg";
import Yercaud2 from"../assets/yercaud2.jpg";
import Russia1 from"../assets/st.petersburg1.jpg";
import Russia2 from"../assets/st.petersburg2.jpg";
import Russia3 from"../assets/lakebaikal1.jpg";
import Russia4 from"../assets/lakebaikal2.jpg";

const Destination = () =>{
    return(
        <div className="destination">
            <h1>Your Destination</h1>
            <p>Tours give you the opertunity to See a lot, within a time frame</p>
            
            <DestinationData className="first-destination-row"
             title='Yercaud,TamilNadu'
             text="Yercaud lies in the Eastern Ghats, at an altitude of 1515 metres, promising very pleasant weather all year round. It has an abundance of natural forests and different species of flora and fauna around the lake, infact the name signifies Lake Forest. Coffee and citrus fruits are grown in this quaint hill station, making it a hiking and trekking paradise.
             Yercaud is a hill station town in the south Indian state of Tamil Nadu. It lies in the Shevaroy Hills, known for their orange groves, and coffee, fruit and spice plantations. Yercaud Lake has a boathouse, and is surrounded by gardens and woods. On the lake’s eastern shore, Anna Park has local plants and a Japanese garden with bonsai. To the southwest, Lady’s Seat vantage point has a watchtower with a telescope."
             img1={Yercaud1}
             img2={Yercaud2}
             ></DestinationData>

            <DestinationData className="first-destination-row-reverse"
            title='St.PetersBurg,Russia'
             text="Although smaller than Moscow, St. Petersburg actually has so much to offer, it's often impossible to see it all in one day. Compared to Moscow, St. Petersburg feels more European–fine art and exquisite design details mixing in with history around every corner. You can explore it on foot to admire the architecture up close and personal, or hop on a cruise to explore part of the 300 kilometers of canals that cut through the imperial city."
             img1={Russia1}
             img2={Russia2}
             ></DestinationData>
            
            <DestinationData className="first-destination-row"
            title='Lake Baika,Russia'
             text="When it comes to breaking records, Lake Baikal is hard to beat. This massive high-altitude rift lake in Siberia is the oldest and deepest lake in the world–reaching a maximum depth of 1,642 meters and an estimated 25 million years of age. Baikal is also the largest freshwater lake in the world–over 20 percent of the world's freshwater is in this lake."
             img1={Russia3}
             img2={Russia4}
             ></DestinationData>
           
           
        </div>

    )
}

export default Destination;