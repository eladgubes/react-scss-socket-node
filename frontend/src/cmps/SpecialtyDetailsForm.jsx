import React from 'react';
import { UploadImg } from '../cmps/UploadImg'


export default class SpecialtyDetailsForm extends React.Component {
    state = {
        details: {
            fullName: {
                firstName: '',
                lastName: ''
            },
            title: '',
            description: '',
            tags: '',
            country: '',
            city: ''
        },

    }

    handleInput = ({ target }) => {
        const field = target.name;
        const value = (target.type === 'number') ? +target.value : target.value;
        this.setState(prevState => ({ details: { ...prevState.details, [field]: value } }))
    }

    onHandleFullName = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState(prevState => ({ fullName: { ...prevState.fullName, [field]: value } }))
    }


    onSaveReview = (ev) => {
        ev.preventDefault()
    }



    render() {
        return (
            <div className="specialty-details-form ">
                <h1>Personal info</h1>
                <p>Tell us a bit about yourself. This information will appear on your public profile,<br /> so that potential buyers can get to know you better.</p>
                <hr />
                <div className="user-info-container flex column space-between">
                    <div className="row full-name-container flex space-between">
                        <aside>
                            <h1>Full Name:</h1>
                        </aside>
                        <div className="input full-name flex ">
                            <input autoComplete="off" type="text" onChange={this.onHandleFullName} placeholder="First Name" name="firstName" />
                            <input autoComplete="off" type="text" onChange={this.onHandleFullName} placeholder="Last Name" name="lastName" />
                        </div>
                    </div>
                    <div className="row title-container flex space-between">
                        <aside>
                            <h1>Title:</h1>
                        </aside>
                        <div className="input title flex ">
                            <input autoComplete="off" type="text" onChange={this.handleInput} value={this.state.details.title} name="title" />
                        </div>
                    </div>
                    <div className="row description-container flex space-between">
                        <aside>
                            <h1>Description:</h1>
                        </aside>
                        <div className="input description flex ">
                            <textarea maxLength="250" rows="10" cols="57" onChange={this.handleInput} value={this.state.details.description} name="description" />
                        </div>
                    </div>
                    <div className="row tags-container flex space-between">
                        <aside>
                            <h1>Tags:</h1>
                            <p>to get multiple tags use commas</p>
                        </aside>
                        <div className="input tags flex ">
                            <input autoComplete="off" type="text" onChange={this.handleInput} value={this.state.details.tags} name="tags" />
                        </div>
                    </div>
                    <div className="row country-container flex space-between">
                        <aside>
                            <h1>Country:</h1>
                        </aside>
                        <div className="input country flex ">
                            <input autoComplete="off" type="text" onChange={this.handleInput} value={this.state.details.country} name="country" />
                        </div>
                    </div>
                    <div className="row city-container flex space-between">
                        <aside>
                            <h1>City:</h1>
                        </aside>
                        <div className="input city flex ">
                            <input autoComplete="off" type="text" onChange={this.handleInput} value={this.state.details.city} name="city" />
                        </div>
                    </div>
                    <aside>
                        <h1>Upload Photos:</h1>
                    </aside>
                    <div className="upload-img ">

                        <UploadImg></UploadImg>
                    </div>
                </div>
            </div>
        )
    }
}