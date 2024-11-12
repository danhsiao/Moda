import React from "react";
import '../styles/Lifestyle.css';
import Navbar from "../components/Navbar";

function Component(props) {
    return(
        <div className="gallery-item">
            <img src={props.image} alt={props.image} className = "gallery-image"></img>
            <h2>{props.title}</h2>
            <h3>{props.description}</h3>
            <h4>{props.date}</h4>
        </div>
    );
}

function Lifestyle() {
    const lifestyleData = require('../data/lifestyledata.json');
    return(
        <div>
            <Navbar />
            <h1>Lifestyle</h1>
            <div class = "gallery">
                {lifestyleData.lifestylecomponents.map((component,index) => (
                    <Component key={index} image = {component.image} title = {component.title} description = {component.description} date = {component.date}/>
                ))}
            </div>
        </div>
    )
}

export default Lifestyle;