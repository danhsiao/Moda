import React from "react";
import '../styles/Sections.css';
import Navbar from "../components/Navbar";
import Card from "../components/Card";

function Culture() {
    const cultureData = require('../data/culturedata.json');
    return(
        <div>
            <Navbar />
            <h1>Culture</h1>
            <div className="gallery">
                {
                    cultureData.culturecomponents.map((component,index) => (
                        <Card key={index} image = {component.image} title = {component.title} description = {component.description} date = {component.date}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Culture;