import React from "react";
import '../styles/Sections.css';
import Navbar from "../components/Navbar";
import Card from "../components/Card";

function Lifestyle() {
    const lifestyleData = require('../data/lifestyledata.json');
    return(
        <div>
            <Navbar />
            <h1>Lifestyle</h1>
            <div className="gallery">
                {
                    lifestyleData.lifestyleComponents.map((component,index) => (
                        <Card key={index} image = {component.image} title = {component.title} description = {component.description} date = {component.date}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Lifestyle;