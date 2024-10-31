import React from "react";
import '../styles/FashionWeek.css';
import Navbar from "../components/Navbar";

function List() {
    const dates = ["4/19", "4/18", "4/17", "4/16", "4/15"];
    const events = ["Fuse Fashion Show", "WSUM x WDT X Moda Pop Up Shop", "WUD Music x Moda Open Mic Night", "\"Careers In Creative\" Panel", "Clothing Drive & Professional Headshots"];
    const descriptions = ["\“Fuse: Igniting Innovation\” was the culmination of UW Fashion Week at The Orpheum Theater.",
       "Event was cancelled due to weather conditions.", 
       "Open mic night at the Rathskeller where the Madison community was invited to showcase their talents.", 
       "This panel detailed the variety of careers in creative industries and how passion projects can become careers. Featuring guest speakers: Claire Kellesvig, Ali Gilbertson, and Chris Perry.", 
       "In collaboration with Luke’s Closet, Moda invited attendees to donate clothes and get professional headshots taken."];
  
    /*const dateItems = dates.map(dates => <li>{dates}</li>);
    const eventItems = events.map(events => <li>{events}</li>);
    const descriptionItems = descriptions.map(descriptions => <li>{descriptions}</li>); */
  
    const listItems = dates.map((date, index) => (
      <div className="listItem" key={index}>
        <div className="date">{date}</div>
        <div className="event">{events[index]}</div>
        <div className="eventDescriptionContainer">
        <div className="description">{descriptions[index]}</div>
        </div>
      </div>
    ));
  
    return(
        <section className="allLists">
            {listItems}
        </section>
    );
  }

function FashionWeek2024() {
    return (
        <div>
            <Navbar/>
            <div>
                <h1>UW Fashion Week</h1>
                <h2>Spring '24</h2>
                <img class="main-image" src="fashionweek2024/FashionWeekSpring24.jpg" alt=''></img>
                <h2 class="description">Moda’s execution of UW Fashion Week in the Spring of 2024 was a spectacle of artistic collaboration within the Madison community.
                </h2>
            </div>
            <List />
            <div className='container'>
                <h1>Fuse: Igniting Innovation</h1>
                <h2>Spring '24</h2>
                <video controls> 
                    <source src="Fuse Promo.MP4" type="video/mp4"/>
                </video>
                <h2 class="description">This fashion show at The Orpheum Theater featured 54 looks from 10 student designers and retailers with live performances from the band Live From Mars and Optima Dance.</h2>

                <div class = "grid-container">
                    <div class= "grid-item">
                        <img class="logo-image" src='fashionweek2024/abbeyxiong.jpg' alt=''></img>
                        <button class="designer-button">Abbey Xiong</button>
                    </div>
                    <div class= "grid-item">
                        <img class="logo-image" src='fashionweek2024/gracieharshaw.jpg' alt=''></img>
                        <button class="designer-button">Gracie Harshaw</button>
                    </div>
                    <div class= "grid-item">
                        <img class="logo-image" src='fashionweek2024/upshift.jpg' alt=''></img>
                        <button class="designer-button">Upshift Swap Shop</button>
                    </div>
                    <div class= "grid-item">
                        <img class="logo-image" src='fashionweek2024/emmafogarty.jpg' alt=''></img>
                        <button class="designer-button">Emma Fogarty</button>
                    </div>
                    <div class= "grid-item">
                        <img class="logo-image" src='fashionweek2024/rethreads.jpg' alt=''></img>
                        <button class="designer-button">ReThreads</button>
                    </div>
                    <div class= "grid-item">
                        <img class="logo-image" src='fashionweek2024/edenmeidl.jpg' alt=''></img>
                        <button class="designer-button">Eden Meidl</button>
                    </div>
                    <div class= "grid-item">
                        <img class="logo-image" src='fashionweek2024/newday.jpg' alt=''></img>
                        <button class="designer-button">A New Day Boutique</button>
                    </div>
                    <div class= "grid-item">
                        <img class="logo-image" src='fashionweek2024/vaillencorp.jpg' alt=''></img>
                        <button class="designer-button">Ian Valliencourt</button>
                    </div>
                    <div class= "grid-item">
                        <img class="logo-image yasminhill" src='fashionweek2024/yasminhill.jpg' alt=''></img>
                        <button class="designer-button" >Yasmin Hill</button>
                    </div>
                    <div class= "grid-item">
                        <img class="logo-image" src='fashionweek2024/qsm.jpg' alt=''></img>
                        <button class="designer-button">Mia Quitlong Staszcuk</button>
                    </div>
                </div>
                <Performances />
            </div>
            
        </div>
    )
}

function Performances() {
    return (
        <div className="performances-container">
          <h2>With Performances From</h2>
          <div className="performer-names">
            <h1 className="performer">Live From Mars</h1>
            <h1 className="performer optima-dance">Optima Dance</h1>
          </div>
          <div className="video-container">
            {/* Assuming you have a video source */}
            <video controls className="performance-video">
              <source src="path_to_your_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      );    

  }

export default FashionWeek2024;
