import React from 'react';
import { Saved } from '../cmps/dashboard/Saved'
import { Shop } from '../cmps/dashboard/Shop'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { BuyerOrders } from '../cmps/dashboard/BuyerOrders'
import { SellerOrders } from '../cmps/dashboard/SellerOrders'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockIcon from '@material-ui/icons/Lock';
import HistoryIcon from '@material-ui/icons/History';
import { dark } from '@material-ui/core/styles/createPalette';
// import FingerprintIcon from '@material-ui/icons/Fingerprint';

class Dashboard extends React.Component {

    state = {
        savedBGC: null,
        shopBGC: null,
        ordersBGC: 'active',
        OffersBGC: null
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    getConvertedDate(timeStamp) {
        const date = new Date(timeStamp).toLocaleString("en-US", { timeZoneName: "short" }).split(',')
        return date[0]
    }

    setBGC(section) {
        // console.log('in setBGC');
        this.setState({ savedBGC: null, shopBGC: null, ordersBGC: null, OffersBGC: null }, () => {
            this.setState({ [section]: 'active' })
        })
    }

    onOrderAns(order, ans) {
        // orderAns(order, ans);
    }

    setSection = (key) => {
        const { user } = this.props
        switch (key) {
            case 'saved':
                return <Saved user={user} setCurrState={this.setCurrState} getConvertedDate={this.getConvertedDate} />
            case 'shop':
                return <Shop user={user} getConvertedDate={this.getConvertedDate} />
            case 'my-orders':
                return <BuyerOrders user={user} getConvertedDate={this.getConvertedDate} />
            case 'job-offers':
                return <SellerOrders user={user} getConvertedDate={this.getConvertedDate}
                onOrderAns={this.props.orderAns} />
            default:
                return <BuyerOrders user={user} getConvertedDate={this.getConvertedDate} />
        }
    }

    render() {
        const { savedBGC, shopBGC, ordersBGC, OffersBGC } = this.state
        const user = this.props.user
        const currState = this.props.match.params.section
        return (
            user && <div className="dashboard">
                <div className="container flex">
                    <aside>
                        <div className="user-info">
                            <div className="img-name flex column center">
                                <div className="user-img">
                                    <img src={user.profileImg} alt="profile-pic" />
                                </div>
                                <div className="user-name">
                                    <h1>{user.fullName}</h1>
                                </div>
                            </div>
                            <div className="details-container">
                                <div className="detail user-mail flex justify-center">
                                    <MailOutlineIcon style={{ color: 'rgb(100, 100, 100)' }} />
                                    <p>{user.email}</p>
                                </div>
                                <div className="detail user-last-login flex justify-center">
                                    <HistoryIcon style={{ color: 'rgb(100, 100, 100)' }} />
                                    <p>{this.getConvertedDate(user.lastLoginAt)}</p>
                                </div>
                                <div className="detail user-pass flex justify-center">
                                    <LockIcon style={{ color: 'rgb(100, 100, 100)' }} />
                                    <p>*****</p>
                                </div>
                                <div className="detail user-id flex center">
                                    <button>Edit Profile</button>
                                </div>
                            </div>
                        </div>
                        <hr className="dashboard-nav-hr" />
                        <div className="dashboard-nav">
                            <ul>
                                <li className={savedBGC} onClick={() => this.setSection('saved'), () => this.setBGC('savedBGC')}><Link to="/dashboard/saved">Saved</Link></li>
                                {user.description &&
                                    <div>
                                        <li className={shopBGC} onClick={() => this.setSection('shop'), () => this.setBGC('shopBGC')}><Link to="/dashboard/shop">Shop</Link></li>
                                        <li className={OffersBGC} onClick={() => this.setSection('job-offers'), () => this.setBGC('OffersBGC')}><Link to="/dashboard/job-offers">Job Offers</Link></li>
                                    </div>
                                }
                                <li className={ordersBGC} onClick={() => this.setSection('my-orders'), () => this.setBGC('ordersBGC')}><Link to="/dashboard/orders/my-orders">My Orders</Link></li>
                            </ul>
                        </div>
                    </aside>
                    <hr />
                    <section className="main-section">
                        {this.setSection(currState)}
                    </section>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.loggedInUser,
        orders: state.orders.orders
    }
}

const mapDispatchToProps = {
    // orderAns,
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
