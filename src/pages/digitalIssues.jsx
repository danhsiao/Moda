import React from "react";
import '../styles/Issues.css';
import Navbar from "../components/Navbar";
import Card from "../components/Card";

function DigitalIssues() {
    const fashionSection = require('../data/digitalIssuesData.json');
    return(
        <div>
            <Navbar />
            <h1>Digital Issues</h1>
            <div className="gallery">
                {
                    digitalissuesData.igitalIssues.map((component,index) => (
                        <Card key={index} image = {component.image} title = {component.title} description = {component.description} date = {component.date}/>
                    ))
                }
            </div>
        </div>
    )
}

export default DigitalIssues;