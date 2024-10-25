import "../styles/FashionWeek.css"
import { ImageCarousel } from "../components/ImageCarousel";
import { slides } from "../data/fashionWeek2022Data.json";

function FashionWeek2022() {
    return (
        <div>
            <div className="container">
                <h1>UW Fashion Week</h1>
                <h2>Spring '22</h2>
                <img class='main-image' src=""></img>
            </div>
            <ImageCarousel data={slides}/>
        </div>
    )
}

export default FashionWeek2022;