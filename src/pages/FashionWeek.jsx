import '../styles/FashionWeek.css';

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
        <section class = "allLists">
        {listItems}
        </section>
    );
    
  }

function FashionWeek() {
    return (
        <div>
            <div>
                <h1>UW Fashion Week</h1>
                <h1>Spring '24</h1>
                <img src="FashionWeekSpring24.jpg"></img>
            </div>
            <div>
                <h1>Fuse: Igniting Innovation</h1>
                <h1>Fashion Show at Orpheum</h1>
                <h1>Spring '24</h1>
                <h1>April 19th</h1>
                <img src="FashionWeekSpring24.jpg"></img>
                <p class="fashion-show-description">Description</p>

                <h2>Designers</h2>
                <div class = "grid-container">
                    <details>
                        <summary>Designer Name</summary>
                        <p>Explore</p>
                    </details>
                    <details>
                        <summary>Designer Name</summary>
                        <p>Explore</p>
                    </details>
                    <details>
                        <summary>Designer Name</summary>
                        <p>Explore</p>
                    </details>
                </div>
                <h2>Retailers</h2>
                <div class = "grid-container">
                    <details>
                        <summary>Retailer Name</summary>
                        <p>Explore</p>
                    </details>
                    <details>
                        <summary>Retailer Name</summary>
                        <p>Explore</p>
                    </details>
                    <details>
                        <summary>Retailer Name</summary>
                        <p>Explore</p>
                    </details>
                </div>
            </div>
            <List />
        </div>
    )
}

export default FashionWeek;