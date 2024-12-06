import React from "react";
import '../styles/Sections.css';
import Navbar from "../components/Navbar";
import Card from "../components/Card";

function Fashion() {
    const fashionSection = require('../data/fashionsection.json');
    var delay = 0;
    return(
        <div>
            <Navbar />
            <h1>Fashion</h1>
            <div className="gallery">
                {
                    fashionSection.fashionComponents.map((component,index) => (
                        <Card key={index} image = {component.image} title = {component.title} description = {component.description} date = {component.date} delay={delay+=0.1}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Fashion;
