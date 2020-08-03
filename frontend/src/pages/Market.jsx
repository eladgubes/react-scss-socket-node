import React from 'react';
import userService from '../service/userService'
import FullCard from '../cmps/FullCard'
import SearchItems from '../cmps/SearchItems'
import { connect } from 'react-redux';
import { loadUsers } from '../store/actions/userActions'
import { ProgressBar } from '../cmps/ProgressBar'
class Market extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.loadUsers(this.props.user.filterBy)
    }

    async onSortBy(sortBy) {
        console.log(sortBy, this.props.users);
    }




    onToggleSaved = (miniSeller) => {
        userService.toggleSaved(miniSeller, this.props.user)
    }

    render() {
        const users = this.props.users
        if (!users || !users.length) return (
            <div className="container margin-center flex justify-center ">
                <ProgressBar />
            </div>
        )
        return (
            <section className="market-page ">
                <div className="search-bar container margin-center flex justify-center align-center">
                    <SearchItems history={this.props.history} />

                </div>
                <div className="container margin-center">
                    <ul>
                        <li><a onClick={() => { this.onSortBy('name') }} href="#"> Name</a></li>
                        <li><a onClick={() => { this.onSortBy('rate') }} href="#"> Rate</a></li>
                        <li><a onClick={() => { this.onSortBy('cost') }} href="#"> Cost</a></li>
                    </ul>
                    <div className="market margin-center">
                        {users.length > 0 && users.map(specialty => {
                            return <FullCard savedSeller={this.props.user.savedSeller} cardUser={specialty} key={specialty._id}
                                savedSpecialty={this.savedSpecialty} onToggleSaved={this.onToggleSaved} />
                        })}
                    </div>
                </div>
                <div className="pagination flex justify-center">
                    {/* <PaginationPage></PaginationPage> */}
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.user.users,
        user: state.user.loggedInUser,
    }
}


const mapDispatchToProps = {
    loadUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Market)