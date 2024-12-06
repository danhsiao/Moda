import React from "react";
import Navbar from "../components/Navbar";
import { ImageCarousel } from "../components/ImageCarousel";
import data from "../data/latestIssuesData.json";
import Card from "../components/Card";
import lifestyleData from "../data/lifestyledata.json";
import cultureData from "../data/culturedata.json";
import fashionData from "../data/fashionsection.json";
import artsData from "../data/artData.json";

function Home() {
    const sections = {
        ...lifestyleData,
        ...cultureData,
        ...fashionData,
        ...artsData
    };
    const combinedComponents = Object.keys(sections)
        .flatMap(key => Object.values(sections[key]))
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    var delay = 0;

    return (
        <div className="App">
            <div className="title-section">
                <Navbar/>
            </div>
            <div className="under-section">
                <div className="home-text"><h2>Latest Issues</h2></div>
                <ImageCarousel data={data.slides} slidesToShow={1}/>
                <p className="gap"></p>
                <div className="home-text"><h2>Latest Online</h2></div>
                <div className="latest-online">
                    {
                        // Display first 10 sections
                        combinedComponents.slice(0, 10).map((component, index) => {
                            return <Card key={index} image={component.image} title={component.title} description={component.description}
                                date={component.date} delay={delay+=0.1}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;