import React from "react";
import '../styles/Sections.css';
import Navbar from "../components/Navbar";
import Card from "../components/Card";

function Fashion() {
    const fashionSection = require('Moda/src/data/fashionsection.json');
    return(
        <div>
            <Navbar />
            <h1>Fashion</h1>
            <div className="gallery">
                {
                    fashionSection.fashioncomponents.map((component,index) => (
                        <Card key={index} image = {component.image} title = {component.title} description = {component.description} date = {component.date}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Fashion;
