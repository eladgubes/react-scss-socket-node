import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export class TopSellersSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 2,
            adaptiveHeight: false
        };
        return (
            <div className="top-seller-slider">
                <h2> Multiple items </h2>
                <Slider  {...settings}>
                    <div className="carousel-img-container">
                        <h3>1</h3>
                        <img src="https://img.favpng.com/18/18/18/computer-icons-icon-design-avatar-png-favpng-X29r5WhWMXVYvNsYXkR4iBgwf.jpg" alt="" />
                    </div>
                    <div className="carousel-img-container">
                        <h3>2</h3>
                        <img src="https://media.gettyimages.com/photos/smiling-lawyer-sitting-at-desk-in-office-picture-id104821116?s=612x612" alt="" />
                    </div >
                    <div className="carousel-img-container">
                        <h3>3</h3>
                    </div>
                    <div className="carousel-img-container">
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                    <div>
                        <h3>7</h3>
                    </div>
                    <div>
                        <h3>8</h3>
                    </div>
                    <div>
                        <h3>9</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}
