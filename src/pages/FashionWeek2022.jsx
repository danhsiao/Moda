import "../styles/FashionWeek.css"
import { ImageCarousel } from "../components/ImageCarousel";
import data from "../data/fashionWeek2022Data.json";

function FashionWeek2022() {
    return (
        <div>
            <div className="container">
                <h1>UW Fashion Week</h1>
                <h2>Spring '22</h2>
                <img class='main-image' src="fashionweek2022/FashionWeekSpring22.jpg" alt=""></img>
                <h2 className="description">This fashion show in collaboration with Liquid featured 45 looks from 8 designers and retailers.</h2>
                <div className="grid-container">
                    <div class="grid-item">
                        <img class="logo-image" src='fashionweek2022/1. August Bent.jpg' alt=''></img>
                        <button class="designer-button">August Bent</button>
                    </div>
                    <div class="grid-item">
                        <img class="logo-image" src='fashionweek2022/2. Claudia Schwiesow.JPG' alt=''></img>
                        <button class="designer-button">Claudia Schwiesow</button>
                    </div>
                    <div class="grid-item">
                        <img class="logo-image" src='fashionweek2022/3. Lindsey Swiggum.jpg' alt=''></img>
                        <button class="designer-button">Lindsey Swiggum</button>
                    </div>
                    <div class="grid-item">
                        <img class="logo-image" src='fashionweek2022/4. Baxter_.jpg' alt=''></img>
                        <button class="designer-button">Baxter</button>
                    </div>
                    <div class="grid-item">
                        <img class="logo-image" src='fashionweek2022/5. Nicole.jpg' alt=''></img>
                        <button class="designer-button">Nicole</button>
                    </div>
                    <div class="grid-item">
                        <img class="logo-image" src='fashionweek2022/6. Ian Vailliencourt.png' alt=''></img>
                        <button class="designer-button">Ian Vailliencourt</button>
                    </div>
                    <div class="grid-item">
                        <video>
                            <source src='fashionweek2022/7. Mia Quitlong Staszcuk.mov' alt=''></source>
                        </video>
                        <button class="designer-button">Mia Quitlong Staszcuk</button>
                    </div>
                    <div class="grid-item">
                        <img src='fashionweek2022/8. Upshift Swap Shop.JPG' alt=''></img>
                        <button class="designer-button">Upshift Swap Shop</button>
                    </div>
                </div>
                <div className="carousel-container">
                    <h2>A Glimpse</h2>
                    <ImageCarousel data={data.slides}/>
                </div>
            </div>
        </div >
    )
}

export default FashionWeek2022;