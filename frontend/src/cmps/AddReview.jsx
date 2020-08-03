import React from 'react';
import { Rating } from '@material-ui/lab';

export function AddReview(props) {
    return (
        <div>
            <div className="review-modal">
                <Rating className="rate" onChange={(event) => {
                    props.onSetValue(event);
                }} name="size-medium" readOnly={false} precision={0.5} />
                <p>Your experience: </p> <textarea onInput={props.handleInput} name="reviewTxt" type="text" cols="50" rows="7" /> <br></br>
                <button className="btn add-review-btn" onClick={props.onAddReview}>Save</button>
            </div>
        </div>
    )
} 