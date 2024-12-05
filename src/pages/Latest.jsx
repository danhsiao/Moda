import React from "react";
import '../styles/Sections.css';
import Navbar from "../components/Navbar";
import Card from "../components/Card";

function Latest() {
    const latestData = require('../data/latestData.json');
    return(
        <div>
            <Navbar />
            <div className="gallery">
                {
                    latestData.latestcomponents.map((component,index) => (
                        <Card key={index} image = {component.image} date = {component.date} title = {component.title} description = {component.description} />
                    ))
                }
            </div>
        </div>
    )
}

export default Latest;