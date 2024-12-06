import React from "react";
import '../styles/Sections.css';
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import lifestyleData from "../data/lifestyledata.json";
import cultureData from "../data/culturedata.json";
import fashionData from "../data/fashionsection.json";
import artsData from "../data/artData.json";

function Latest() {
    const latestData = require('../data/latestData.json');
    const sections = {
        ...lifestyleData,
        ...cultureData,
        ...fashionData,
        ...artsData
    };
    const combinedComponents = Object.keys(sections)
    .flatMap(key => Object.values(sections[key]))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
    return(
        <div>
            <Navbar />
            <div className="gallery">
                {
                    combinedComponents.slice(0, 10).map((component, index) => {
                        return <Card key={index} image={component.image} title={component.title} description={component.description}
                            date={component.date}/>
                    })
                }
            </div>
        </div>
    )
}

export default Latest;