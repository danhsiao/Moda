import React from "react";

function About() {
    return (
        <div className="about-page">
            <img src="./modaAboutImage.jpg" id="about-logo" alt="Moda About"/>
            <div className="about-block">
                <h2><strong>About</strong></h2>
                <p>Moda Magazine is University of Wisconsin-Madison’s premiere life and style publication. Moda, Italian for “fashion,” was founded in 2013 by two university students driven to create a platform that engages and inspires robust dialogue surrounding culture, arts and fashion. Moda is registered as a student organization on campus as of 2021. Today, our coverage extends from Fashion, Lifestyle, Culture and the Arts. We publish both online and printed issues that strive to provide unique and fresh content with journalistic integrity and quality. Our publication embraces the voices and ideas from UW-Madison students and affiliates. Moda Madison also coordinates UW Fashion Week every spring, culminating in a finale Fashion Show. Moda strives to cultivate an inclusive and passionate community for writers, artists, photographers, fashion enthusiasts, stylists, makeup artists, and more.</p>
                <p></p>
                <p>All voices and perspectives are welcome at Moda Magazine. We are always looking for new members to contribute to our publication! If you are interested in being involved with Moda send an email at <a style={{color: "black"}} href="mailto: modamagaizneuw@gmail.com">modamagaizneuw@gmail.com.</a></p>
            </div>
        </div>
    );
}

export default About;