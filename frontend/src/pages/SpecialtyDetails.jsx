
import React from 'react';
import { Reviews } from '../cmps/Reviews'
import { DetailsPhotoSlider } from '../cmps/DetailsPhotoSlider'
import userService from '../service/userService.js'
import SocketService from '../service/SocketService'
import { AddReview } from '../cmps/AddReview'
import { FloatingCalendar } from '../cmps/FloatingCalendar'
import StarIcon from '@material-ui/icons/Star';
import { SentReserveModal } from '../cmps/SentReserveModal'
import SearchItems from '../cmps/SearchItems'
import { connect } from 'react-redux'
import { addOrder } from '../store/actions/orderActions'
import { loadUsers, addReview } from '../store/actions/userActions'
import orderService from '../service/orderService'




class SpecialtyDetails extends React.Component {

    state = {
        seller: null,
        showPhotosGallery: false,
        guestsAmount: 0,
        dates: null,
        isSaved: false,
        isAddReview: false,
        rateValue: 0,
        reviewTxt: '',
        isReserved: false,
        showMobileCal: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        SocketService.setup();
        this.updateCurrSeller()
        this.setState({ isReserved: false })
        // window.addEventListener('resize', () => { console.log(window.innerWidth) })
    }

    async updateCurrSeller() {

        const id = this.props.match.params
        const seller = await userService.getUser(id.sellerId)
        // console.log('this is seller: ', seller)
        this.setState({ seller })
    }

    togglePhotosGallery = () => {
        this.setState(prevState => (
            {
                showPhotosGallery: !prevState.showPhotosGallery
            }
        ))
    }


    onHandleChange = ({ target }) => {
        const key = target.name
        const value = target.value
        this.setState(prevState => ({
            ...prevState,
            [key]: value
        }))

    }

    onReserveSeller = (ev) => {
        ev.preventDefault()
        let orderDetails = {
            guestCount: this.state.guestsAmount,
            date: this.state.dates,
            price: this.state.seller.price,
            seller: {
                _id: this.state.seller._id,
                fullName: this.state.seller.fullName,
                profileImg: this.state.seller.profileImg,
            },
            buyer: {
                _id: this.props.user._id,
                fullName: this.props.user.fullName,
                profileImg: this.props.user.profileImg
            }
        }
        orderService.addOrder(orderDetails)
        SocketService.emit('makeOrder', orderDetails)
        this.setState({ isReserved: true })
    }


    getDates = (selectedDates) => {
        // console.log('selected dates:', selectedDates)
        let dates;
        dates = selectedDates
        this.setState({ dates })
    }


    onSetValue = ({ target }) => {
        this.setState({ rateValue: target.value })
    }


    onToggleModalReview = () => {
        this.setState(prevState => (
            {
                isAddReview: !prevState.isAddReview
            }
        ))
    }

    onAddReview = () => {
        let review = {
            sellerId: this.props.match.params.sellerId,
            miniUser: {
                _id: this.props.user._id,
                fullName: this.props.user.fullName,
                profileImg: this.props.user.profileImg
            },
            rate: this.state.rateValue,
            reviewTxt: this.state.reviewTxt
        }
        this.props.addReview(review)
        // SocketService.emit('makeOrder', review)
    }

    handleInput = ({ target }) => {
        let key = target.name
        let value = target.value
        this.setState({ [key]: value })
    }

    toggleSaveSeller = () => {
        this.setState(prevState => ({ ...prevState, isSaved: !prevState.isSaved }))
    }

    getGuestCount = ({ target }) => {
        // console.log('target: ', parseInt(target.value))
        this.setState({ guestsAmount: parseInt(target.value) })
    }

    getConvertedDate(timeStamp) {
        const date = new Date(timeStamp).toLocaleString("en-US", { timeZoneName: "short" }).split(',')
        return date[0]
    }

    onShowMobileCal = () => {
        this.setState((prevState) => ({ ...prevState, showMobileCal: !prevState.showMobileCal }))
    }

    render() {
        if (!this.state.seller) return 'loading...'
        if (this.state.showPhotosGallery) return <DetailsPhotoSlider imgs={this.state.seller.imgUrls} onClose={this.togglePhotosGallery} />
        const { seller, isAddReview, showMobileCal } = this.state
        return (

            <div className="specialty-details">
                <div className="search-bar container margin-center flex justify-center align-center">

                    <SearchItems history={this.props.history} />
                </div>
                <span className="far fa-heart">

                </span>
                <div className="photos-container">
                    <section className="grid-photos">
                        {seller.imgUrls.map((imgUrl, idx) => {
                            return <img className={`item${idx + 1}`} key={idx} src={`${imgUrl}`} alt="" />
                        })}
                    </section>
                    <button onClick={this.togglePhotosGallery} className="btn show-all-btn">Show all</button>
                </div>
                <section className="main-container container margin-center">
                    <div className="user-info flex">
                        <div className="img-full-name flex">
                            <div className="img">
                                <img src={seller.profileImg} alt="" />
                            </div>
                            <div className="info flex column align-center">
                                <div className="full-name">
                                    <h4>{seller.fullName.toUpperCase()}</h4>
                                </div>
                                <div className="rate flex justify-center">
                                    {seller.rate}
                                    <span><StarIcon style={{ color: 'rgb(255, 217, 0)' }} /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-details flex sm-container space-between height-100 ">
                        <div className="desc-and-prevs">

                            <div className="details-about-boxer">
                                <p >{`${seller.title.toUpperCase()}`}</p>
                                <p>
                                    {`${seller.description}`}
                                </p>
                            </div>
                            <div className="Mobile-Calendar">
                                <button onClick={this.onShowMobileCal} className="btn reservation-btn">Make a reservation</button>
                                {showMobileCal && < FloatingCalendar getDates={this.getDates} getGuestCount={this.getGuestCount} guestsAmount={this.state.guestsAmount} onReserveSeller={this.onReserveSeller} seller={this.state.seller} />}

                            </div>
                            <div className="previews">
                                {seller && seller.reviews.map((review, idx) => {
                                    return <Reviews key={idx} review={review} />
                                })}
                            </div>
                            <div className="add-review">
                                <button className="btn add-review-btn" onClick={this.onToggleModalReview}>Add Review</button>
                                {isAddReview && <AddReview handleInput={this.handleInput} onAddReview={this.onAddReview} onSetValue={this.onSetValue}></AddReview>}
                            </div>
                        </div>
                        <div className="desktop-floating-calendar">

                            < FloatingCalendar getDates={this.getDates} getGuestCount={this.getGuestCount} guestsAmount={this.state.guestsAmount} onReserveSeller={this.onReserveSeller} seller={this.state.seller} />
                        </div>
                    </div>
                    {this.state.isReserved && <SentReserveModal alert={"Your order was sent!"} />}
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.loggedInUser,

    };
};
const mapDispatchToProps = {
    addOrder,
    loadUsers,
    addReview
};

export default connect(mapStateToProps, mapDispatchToProps)(SpecialtyDetails);
