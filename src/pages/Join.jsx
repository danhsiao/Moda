import React from "react";
import "../styles/join.css"

function Join() {
    return (
        <body>
            <div>
                <h1 id="joinTeam">Join Our Team!</h1>
                <p>We are always looking for new writers, photographers and artists to join our team!
                Anyone is welcome to join as a contributing member and does not need to apply.
                </p>
                <p>
                    Feel free to send any questions to <a href="modamagazineuw@gmail.com" style={{color: 'black'}}>modamagazineuw@gmail.com</a>
                </p>
            </div>

            <div>
                <h1 id="virtualModel">Ongoing Virtual Model Call</h1>
                <p>We are continually accepting modeling applications for during the school year! No experience is needed, all are welcome. Please fill out <a href="https://docs.google.com/forms/d/e/1FAIpQLSeZdwS1YSNmZ7AH6pVFyubPHNIHpy0CphRlyru4jaYXZhj52Q/viewform" style={{color: 'black'}}> this</a> form
                    if you are interested in getting involved. We would love to have you!
                </p>
            </div>
        </body>
    );
}

export default Join;