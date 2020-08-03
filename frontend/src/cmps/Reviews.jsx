import React from 'react';
import { Rating } from '@material-ui/lab';

export class Reviews extends React.Component {

    state = {
        profileImg: null,
        name: null,
        rate: null,
        date: null,
        txt: null
    }

    componentDidMount() {
        const review = this.props.review;
        const profileImg = review.miniUser.profileImg;
        const name = review.miniUser.fullName;
        const rate = review.rate;
        const date = review.createdAt;
        const txt = review.reviewTxt;

        this.setState({ profileImg, name, rate, date, txt })
    }


    getConvertedDate(timeStamp) {
        const date = new Date(timeStamp).toLocaleString("en-US", { timeZoneName: "short" }).split(',')
        return date[0]
    }

    render() {

        const { profileImg, name, rate, date, txt } = this.state

        return (
            <div className="reviews">
                <div className="top flex space-between">
                    <div className="left flex space-between margin-top">
                        <img width="50px" src={profileImg} alt="" />
                        <div className="review-info">
                            <h3>{name}</h3>
                            <p>{this.getConvertedDate(date)}</p>
                        </div>
                    </div>
                    <div className="rating">
                        <Rating name="size-medium" readOnly={true} value={rate} />
                    </div>
                </div>
                <div className="bottom">
                    <p>{txt}</p>
                </div>
            </div>
        )
    }
}