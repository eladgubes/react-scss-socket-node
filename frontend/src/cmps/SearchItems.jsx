
import React from 'react';
import { connect } from 'react-redux'
import { loadUsers } from '../store/actions/userActions'



class SearchItems extends React.Component {
    state = {
        filter: {
            searchKey: '',
            place: ''
        },
    }

    onSearchByTag = (searchTag) => {
        const filter = {
            searchKey: searchTag,
            place: ''
        }
        this.onSearch(filter)
    }


    onSearchSpecialty = (ev) => {
        ev.preventDefault()
        this.onSearch(this.state.filter)
    }

    onSearch = (filter) => {
        this.props.loadUsers(filter)
        this.props.history.push('/market')
    }

    onHandleChange = ({ target }) => {
        let key = target.name
        let value = target.value
        this.setState(prevState => ({ filter: { ...prevState.filter, [key]: value } }))
    }


    render() {
        return (
            <div className="search-section container flex justify-center ">
                <div className="search-container ">
                    <form className="form-container flex justify-center" onSubmit={this.onSearchSpecialty}>
                        <div className="search-input flex space-between">
                            <input autoComplete="off" type="text" name="searchKey" onChange={this.onHandleChange} placeholder="Looking for..." />
                        </div>
                        <button onClick={this.onSearchSpecialty}>Go</button>
                    </form>
                </div>
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.user.users
    }
}


const mapDispatchToProps = {
    loadUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchItems)