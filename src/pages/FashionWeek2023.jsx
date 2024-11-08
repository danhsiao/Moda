import React from "react";
import '../styles/FashionWeek.css';
import Navbar from "../components/Navbar";

function FashionWeek2023(){
    return(
        <div>
            <Navbar/>
            <div className="container">
                <h1>Moda x Liquid Fashion Show</h1>
                <h2>Fall '23</h2>
                <img src="" alt="" />
                <h2 className="description"> This fashion show in collaboration with Liquid featured 37 looks from 7 designers and retailers</h2>
                <div className="grid-container">
                    <div class="grid-item">
                            <img class="logo-image" src='fashionweek2023/1. August.JPG' alt=''></img>
                            <button class="designer-button">August</button>
                        </div> 
                    <div class="grid-item">
                        <img class= "logo-image" src="fashionweek2023/2. Upshift Swap Shop.JPG" alt="" ></img>
                        <button class="designer-button">Upshift Swap Shop</button>
                    </div>
                    <div class="grid-item">
                        <img class= "logo-image" src="fashionweek2023/3. Gwynedd Allen.PNG" alt="" ></img>
                        <button class="designer-button">Gwyness Allen</button>
                    </div>
                    <div class="grid-item">
                        <img class= "logo-image" src="fashionweek2023/4. Lisa Lor.JPG" alt="" ></img>
                        <button class="designer-button">Lisa Lor</button>
                    </div>
                    <div class="grid-item">
                        <img class= "logo-image" src="fashionweek2023/5. Yasmin Hill.PNG" alt="" ></img>
                        <button class="designer-button">Yasmin Hill</button>
                    </div>
                    <div class="grid-item">
                        <video class="logo-image" controls>
                        <source src="fashionweek2023/6. Mia Quitlong Staszcuk.mp4" type="video/mp4" />
                    </video>
                        <button class="designer-button">Mia Quitlong Staszcuk</button>
                    </div>
                    <div class="grid-item">
                        <img class= "logo-image" src="fashionweek2023/7. Tatem Adessi.jpg" alt="" ></img>
                        <button class="designer-button">Tatem Adessi</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FashionWeek2023;


