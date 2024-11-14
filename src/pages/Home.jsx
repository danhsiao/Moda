import React from "react";
import Navbar from "../components/Navbar";
import { ImageCarousel } from "../components/ImageCarousel";
import data from "../data/latestIssuesData.json";
import Card from "../components/Card";
import lifestyleData from "../data/lifestyledata.json";

function Home() {
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
                        lifestyleData.lifestylecomponents.map((component, index) => {
                            const date = new Date(component.date);
                            const today = new Date();
                            // two year lookup for recent data
                            const line = today.setDate(today.getDate() - 820);
                            if (date > line) {
                                return <Card key={index} image={component.image} title={component.title} description={component.description}
                                 date={component.date}/>
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;