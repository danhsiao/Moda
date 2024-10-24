import '../styles/FashionWeek.css';

function FashionWeek() {
    return (
        <div>
            <div>
                <h1>UW Fashion Week</h1>
                <h2>Spring '24</h2>
                <img class="main-image" src="FashionWeekSpring24.jpg"></img>
                <h2 class="description">Moda’s execution of UW Fashion Week in the Spring of 2024 was a spectacle of artistic collaboration within the Madison community.
                </h2>
            </div>
            <div>
                <h1>Fuse: Igniting Innovation</h1>
                <h2>Spring '24</h2>
                <video controls> 
                    <source src="Fuse Promo.MP4" type="video/mp4"/>
                </video>
                <h2 class="description">This fashion show at The Orpheum Theater featured 54 looks from 10 student designers and retailers with live performances from the band Live From Mars and Optima Dance.</h2>

                <div class = "grid-container">
                    <div class= "grid-item">
                        <img class="logo-image" src='abbeyxiong.jpg'></img>
                        <button class="designer-button">Abbey Xiong</button>
                    </div>
                    <div class= "grid-item">
                        <img class="logo-image" src='gracieharshaw.jpg'></img>
                        <button class="designer-button">Gracie Harshaw</button>
                    </div>
                    <div class= "grid-item">
                        <img class="logo-image" src='upshift.jpg'></img>
                        <button class="designer-button">Upshift Swap Shop</button>
                    </div>
                    <div class= "grid-item">
                        <img class="logo-image" src='emmafogarty.jpg'></img>
                        <button class="designer-button">Emma Fogarty</button>
                    </div>
                    <div class= "grid-item">
                        <img class="logo-image" src='rethreads.jpg'></img>
                        <button class="designer-button">ReThreads</button>
                    </div>
                    <div class= "grid-item">
                        <img class="logo-image" src='edenmeidl.jpg'></img>
                        <button class="designer-button">Eden Meidl</button>
                    </div>
                    <div class= "grid-item">
                        <img class="logo-image" src='newday.jpg'></img>
                        <button class="designer-button">A New Day Boutique</button>
                    </div>
                    <div class= "grid-item">
                        <img class="logo-image" src='vaillencorp.jpg'></img>
                        <button class="designer-button">Ian Valliencourt</button>
                    </div>
                    <div class= "grid-item">
                        <img class="logo-image yasminhill" src='yasminhill.jpg'></img>
                        <button class="designer-button" >Yasmin Hill</button>
                    </div>
                    <div class= "grid-item">
                        <img class="logo-image" src='qsm.jpg'></img>
                        <button class="designer-button">Mia Quitlong Staszcuk</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FashionWeek;