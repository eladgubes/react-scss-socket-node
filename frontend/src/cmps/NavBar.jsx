import React from 'react';
import { Link } from 'react-router-dom';
import { Login } from './Login'
import { SignUp } from './SignUp'
import { connect } from 'react-redux'
import { login, signup, logout } from '../store/actions/userActions'
import { toggleNavBar } from '../store/actions/navBarActions'
import SocketService from '../service/SocketService'
import { SentReserveModal } from '../cmps/SentReserveModal'
import { Hamburger } from '../cmps/Hamburger'

class NavBar extends React.Component {

    state = {
        isLogin: false,
        isSignUp: false,
        isSeller: false,
        isSendMsg: false,
        isSideOpen: false,
        isSideNavVisible:true

    }


    componentDidMount() {
        SocketService.setup()
        this.setState({ isSideOpen: false })
    }

    componentDidUpdate() {
        // SocketService.on('setOrder', (order) => {
        //     if (!this.props || this.props.isSendMsg) return
        //     if (order.seller?._id === this.props.user?._id) this.setState({ isSendMsg: true });
        // })
    }
 
    onLoginToggle = () => {
        this.setState({ isSignUp: false })
        this.setState(prevState => ({ ...prevState, isLogin: !prevState.isLogin }))
    }
    onSignUpToggle = () => {
        this.setState({ isLogin: false })
        this.setState(prevState => ({ ...prevState, isSignUp: !prevState.isSignUp }))//, console.log(this.state.isSignUp))
    }

    onLogin = (userDetails) => {
        this.props.login(userDetails)
        if (this.state.isLogin) {

            this.onLoginToggle()
        }
    }

    toggleHideNav = () => {
        this.setState(prevState => ({ ...prevState, isSideOpen: !prevState.isSideOpen }),
            () => {
                if (this.state.isSideOpen) return 'open-nav'
                return 'closed-nav'
            })
        this.class()
        this.props.toggleNavBar()
    }

    onEnterAsGuest = () => {
        const userLogin = {
            inputName: 'guest@gmail.com',
            password: 123
        }
        this.onLogin(userLogin)
    }

    class = () => {
        let color;
        if (this.state.isSideOpen) return color = 'open-nav ';
        return color
    }

    render() {
        return (
            <div className="nav-bar" >
                <div className="container flex space-between margin-center">
                    <div className="logo">
                        <Link to='/'><h1 className="logo-title">EVENTORS</h1></Link>
                    </div>
                    <div className={`links  flex space-between justify-center ${this.class()}`} >
                        <div className="guest-mode">
                            <a onClick={this.onEnterAsGuest}>Enter As Guest</a>
                        </div>
                        {

                            !this.state.isSeller &&
                            <div>

                                <div><Link to={'/specialtyManage'}>Become an Eventer</Link>
                                </div>
                            </div>
                        }
                        {
                            !this.props.user &&
                            <div className="user-log flex space-between">
                                <div>
                                    <a onClick={this.onSignUpToggle}>Sign Up</a>
                                </div>
                                <div>
                                    <a onClick={this.onLoginToggle}>Login</a>
                                </div>
                            </div>
                        }
                        {
                            this.props.user && <React.Fragment>
                                <div className="logged-user flex space-between align-center">
                                    <div className="login-name">
                                        <a className="user-login-name"> <b> {this.props.user.fullName}</b></a>
                                    </div>
                                </div>
                                <Link to="/dashboard/profile">
                                    <div className="img">
                                        <img width="50px" src={this.props.user.profileImg} alt="profile-img" />
                                    </div>
                                </Link>
                                <a onClick={this.props.logout}>Logout</a>
                            </React.Fragment>
                        }
                        {this.state.isLogin && <Login onLoginToggle={this.onLoginToggle}
                            onLogin={this.props.login} />}
                        {this.state.isSignUp && <SignUp onSignUpToggle={this.onSignUpToggle}
                            onSignUp={this.props.signup} />}
                    </div>
                </div>
                {this.state.isSendMsg && <SentReserveModal alert={"Your have new order!"} />}
                <div className="btn-haburger">
                    <button className="toggle-menu" onClick={this.toggleHideNav}><Hamburger ></Hamburger></button>
                </div>
                <div className={`${'test'}`}>

                </div>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        user: state.user.loggedInUser,
        orders: state.orders.orders,
        navBar: state.navBar.isSideOpen
    };
};
const mapDispatchToProps = {
    login,
    signup,
    logout,
    toggleNavBar
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
