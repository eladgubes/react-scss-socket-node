import React from 'react';
import listService from '../service/ListService'


export default class SellerList extends React.Component {
    state = {
        Specialties: null
    }
    componentDidMount() {
        const Specialties = listService.loadSpecialties()
        this.setState({ Specialties })
    }

    savedSpecialty = (sellerId) => {
        // console.log(sellerId);
    }

    render() {
        const { Specialties } = this.state
        return (
            // <MiniHeader/>
            // <Tags/>
            <div>
                {Specialties && Specialties.map(Specialty => {
                    return <FullCard Specialty={Specialty} key={Specialty._id}
                        savedSpecialty={this.savedSpecialty} />
                })}
            </div>
        )
    }
}