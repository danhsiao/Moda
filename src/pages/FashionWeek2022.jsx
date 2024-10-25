import "../styles/FashionWeek.css"
import { ImageCarousel } from "../components/ImageCarousel";
import data from "../data/fashionWeek2022Data.json";

function FashionWeek2022() {
    return (
        <div>
            <div className="container">
                <h1>UW Fashion Week</h1>
                <h2>Spring '22</h2>
                <img class='main-image' src=""></img>
                
            </div>
            <div className="carousel-container">
                <h2>A Glimpse</h2>
                <ImageCarousel data={data.slides}/>
            </div>
        </div>
    )
}

export default FashionWeek2022;