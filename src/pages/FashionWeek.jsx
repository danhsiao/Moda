import '../styles/FashionWeek.css';

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
        </div>
    )
}

export default FashionWeek;