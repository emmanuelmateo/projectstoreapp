import React from 'react'
import carousel00 from "../images/carousel/carousel00.jpg"
import carousel01 from "../images/carousel/carousel01.jpg"
import carousel02 from "../images/carousel/carousel02.jpg"
import carousel03 from "../images/carousel/carousel03.jpg"
import carousel04 from "../images/carousel/carousel04.jpg"

export default function Carousel() {
    return (

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={carousel00} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={carousel01} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={carousel02} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        
    )
}
