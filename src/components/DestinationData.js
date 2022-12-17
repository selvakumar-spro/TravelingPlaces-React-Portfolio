import React from "react";
import { Component } from "react";
import "./DestinationStyles.css";


class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="first-destination-text-col">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="first-destination-image-col">
                    <img src={this.props.img1} alt="img"></img>
                    <img src={this.props.img2} alt="img"></img>
                </div>
            </div>
        )

    }
}

export default DestinationData;