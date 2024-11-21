import React from "react";
import '../styles/Issues.css';
import Navbar from "../components/Navbar";
import Card from "../components/Card";

function DigitalIssues() {
    const digitalIssues = require('../data/digitalissuesData.json');
    return(
        <div>
            <Navbar />
            <h1>Digital Issues</h1>
            <div className="issues">
                {
                    digitalIssues.digitalIssues.map((component,index) => (
                        <Card key={index} image = {component.image}/>
                    ))
                }
            </div>
        </div>
    )
}

export default DigitalIssues;