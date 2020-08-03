import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
export class SliderPreviews extends React.Component {
    render() {
        return (
            <div className="slider-previews">
                <h1>slider</h1>
                <AwesomeSlider animation="cubeAnimation">
                    <div data-src="https://i.ibb.co/nM95x9s/cheff-food-6.jpg" />
                    <div data-src="https://i.ibb.co/7Y9ZrJR/cheff-food-4.jpg" />
                    <div data-src="https://i.ibb.co/4VmLfTx/cheff-food-3.jpg" />
                </AwesomeSlider>
            </div>
        )
    }
}