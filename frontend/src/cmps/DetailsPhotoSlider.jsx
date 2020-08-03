import React from 'react';
import ImageGallery from 'react-image-gallery';


export class DetailsPhotoSlider extends React.Component {
    state = {
        items: []
    }

    componentDidMount() {
        this.setState({ items: this.setImgsObject(this.props.imgs) })
        this.toggleFooterVisibility()
    }

    componentWillUnmount() {
        this.toggleFooterVisibility()
    }

    setImgsObject = (imgs) => {
        let imgsArray = []
        let imgObj;
        imgs.forEach(img => {
            return (
                imgObj = {
                    original: img,
                    thumbnail: img
                },
                imgsArray.push(imgObj)
            )

        })
        return imgsArray
    }

    toggleFooterVisibility = () => {
        document.querySelector('footer').classList.toggle('hide')
    }


    render() {
        const { items } = this.state
        if (!items.length) return 'Loading'
        return (
            <div className="details-photo-slider flex">
                <div className="slider-container margin-center align-center">
                    <button onClick={this.props.onClose}>CLOSE</button>
                    <ImageGallery items={items} showPlayButton={true} thumbnailPosition={'bottom'} sizes={"1025px"} />
                </div>
            </div>
        )
    }
}