import React from 'react';

import SpecialtyImgForm from '../cmps/specialtyImgForm'
import SpecialtyDetailsForm from '../cmps/SpecialtyDetailsForm'

// import { NavBar } from '../cmps/NavBar'
export default class SpecialtyManage extends React.Component {

    state = {
        specialtyDetailsForm: true,
        specialtyImgForm: false,
        specialtyDetails: null,
        specialtyImg: null
    }

    // componentDidMount(){

    // }

    onToggleMenu = () => {
        const specialtyDetailsForm = !this.state.specialtyDetailsForm
        const specialtyImgForm = !this.state.specialtyImgForm
        this.setState({ specialtyDetailsForm, specialtyImgForm })
    }


    // onFinish = () => {

    // }


    render() {
        return (
            <React.Fragment>
                {/* <NavBar /> */}
                <div className="special-manage container margin-center ">
                    <div className="form-container margin-center ">
                        {this.state.specialtyDetailsForm && <SpecialtyDetailsForm onToggleMenu={this.onToggleMenu} />}
                        {this.state.specialtyImgForm && <SpecialtyImgForm onToggleMenu={this.onToggleMenu} />}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}