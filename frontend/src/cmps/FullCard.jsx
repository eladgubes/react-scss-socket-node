import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/lettering.css';
import { Link } from 'react-router-dom'




export default class FullCard extends React.Component {

    state = {
        isClicked: false
    }



    componentDidMount() {
        this.checkSaved()
    }

    fixedDecimalNum() {
        // return this.props.cardUser.rate
        return this.props.cardUser.rate?.toFixed(1)
    }

    getUserTitle() {

        const title = this.props.cardUser.title
        if (title.length > 70) {
            return title.slice(0, 67) + '...'
        }
        return title
    }

    checkSaved = () => {
        const isSaved = this.props.savedSeller.find(saved => saved._id === this.props.cardUser)
        if (isSaved) {
            this.setState({ isClicked: true })
        }
        // if (!isSaved) {
        //     return <FavoriteBorderIcon style={{ color: 'rgb(221, 0, 0)' }} />
        // }
        // else {
        //     return <FavoriteIcon style={{ color: 'rgb(221, 0, 0)' }} />
        // }
    }




    render() {
        const user = this.props.cardUser
        const miniSeller = { _id: user._id, profileImg: user.profileImg, title: user.title }


        return (
            user && <div className="full-card">
                <div className="item-carousel">
                    <div className="imgs">
                        <div className="price-tag">
                            <p>{`Price $${user.price}`}</p>
                        </div>
                        <img src={user.imgUrls[0]} alt="" />
                    </div>
                </div>
                <div className="card-body flex column">
                    <div className="title-rate flex space-between justify-center">
                        <div className="title">
                            <h3>{user.fullName}</h3>
                        </div>
                        <div className="rate flex justify-center">
                            <p>{this.fixedDecimalNum()}</p>
                            <span><StarIcon style={{ color: 'rgb(255, 217, 0)' }} /></span>
                        </div>
                    </div>
                    <div className="description">
                        <p>{this.getUserTitle()}</p>
                    </div>
                    {/* <div className="details-save flex space-between">
                        <Link to={`market/${user._id}`}>Details</Link>
                        <button onClick={() => this.props.onToggleSaved(miniSeller)}>{this.state.isClicked ? <FavoriteIcon style={{ color: 'rgb(221, 0, 0)' }} /> : <FavoriteBorderIcon style={{ color: 'rgb(221, 0, 0)' }} />}</button>
                    </div> */}
                    <div className="details-save flex space-between">
                        <Link to={`market/${user._id}`}>Details</Link>
                        <button>  <FavoriteBorderIcon style={{ color: 'rgb(221, 0, 0)' }} /></button>
                    </div>
                </div>
            </div>

        )
    }
}