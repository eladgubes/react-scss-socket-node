import React from 'react';
import ImageUploader from 'react-images-upload';
import { Rating } from '@material-ui/lab';

export class Shop extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    getUserImgs(imgs) {
        let imgUrls = []
        for (var i = 0; i <= 4; i++) {
            imgUrls.push(imgs[i])
        }
        return imgUrls
    }

    render() {
        const { user,getConvertedDate } = this.props
        return (
            user && <div className="shop">
                <div className="photos-container">
                    <section className="grid-photos">
                        {this.getUserImgs(user.imgUrls).map((imgUrl, idx) => {
                            return <img className={`item${idx + 1}`} key={idx} src={`${imgUrl}`} alt="" />
                        })}
                    </section>
                    <div className="upload-img-btn">
                        <ImageUploader
                            withIcon={true}
                            buttonText='Upload Images'
                            onChange={this.onDrop}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                        />
                    </div>
                    <section className="img-gallery grid">
                        {user.imgUrls.map((imgUrl, idx) => {
                            return (
                                <div  className={`img img${idx + 1}`} key={idx}>
                                    <img src={imgUrl} alt="" />
                                </div>
                            )
                        })}
                    </section>
                    <section className="description">
                        <h3>{user.title}</h3>
                        <p>{user.description}</p>
                        <p>price - ${user.price}</p>
                    </section>
                    <section className="user-reviews">
                        {/* {user.reviews.map((review, idx) => {
                            return (
                                <div className="user-review" key={idx}>
                                    <div className="card-container flex space-between">
                                        <div className="user-card flex">
                                            <div className="img">
                                                <img src={review.miniUser.profileImg} alt="" />
                                            </div>
                                            <div className="user-info">
                                                <p>{review.miniUser.fullName}</p>
                                                <p>{getConvertedDate(review.createdAt)}</p>
                                            </div>
                                        </div>
                                        <div className="rate flex">
                                            <Rating name="size-medium" readOnly={true} value={review.rate} />
                                        </div>
                                    </div>
                                    <div className="review-txt">
                                        <p>{review.reviewTxt}</p>
                                    </div>
                                </div>
                            )
                        })} */}
                    </section>
                </div>
            </div>
        )
    }
}