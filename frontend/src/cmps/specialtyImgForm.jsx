import React from 'react';
// import marketService from '../service/marketService'


export default class SpecialtyImgForm extends React.Component {
    state = {
        imgUrls: ''


    }

    handleInput = ({ target }) => {
        const field = target.name;
        const value = (target.type === 'number') ? +target.value : target.value;
        this.setState(prevState => ({ details: { ...prevState.details, [field]: value } }))
    }

    onSaveReview = (ev) => {
        ev.preventDefault()
    }

    render() {
        return (
            <div className="reviewModal">
                <h1>Load Your images</h1>
                <form action="">
                    <label htmlFor="">enter url image</label>
                    <input type="text" onChange={this.handleInput} value={this.state.imgUrls} name="imgUrls" />
                </form>
                <button onClick={this.props.onToggleMenu}>back to details</button>
            </div>
        )
    }
}
