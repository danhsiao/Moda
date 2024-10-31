import React from "react";
import "../styles/join.css"
import Navbar from "../components/Navbar";

function Join() {
    return (
    <div>
        <Navbar/>
        <div className = "join-page">
            <div className = "join-block">
                <h2><strong>Join Our Team!</strong></h2>
                <p>
                    <strong>
                        We are always looking for new writers, photographers and artists to join our team!
                        Anyone is welcome to join as a contributing member and does not need to apply.
                        Feel free to send any questions to <a style={{color: "black"}} href="mailto:modamagaizneuw@gmail.com">modamagaizneuw@gmail.com.</a>
                    </strong>
                </p>
            </div>
            <div className="separator"></div>
            <div className = "join-block">
                <h2><strong>Ongoing Virtual Model Call</strong></h2>
                <p>
                    <strong>
                        We are continually accepting modeling applications for during the school year! No experience is needed, all are welcome. Please fill out <a style={{color: "black"}} href="https://docs.google.com/forms/d/e/1FAIpQLSeZdwS1YSNmZ7AH6pVFyubPHNIHpy0CphRlyru4jaYXZhj52Q/viewform">this</a> 
                        form if you are interested in getting involved. We would love to have you!
                    </strong>
                </p>
            </div>
            <div className="separator"></div>   
        </div>
    </div>
                        
    );
}

export default Join;
