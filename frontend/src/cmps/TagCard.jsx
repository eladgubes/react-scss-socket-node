import React from 'react';

export function TagCard(props) {
    return (
        <div className={`item img${props.idx}`} onClick={() => props.onSearch(props.catData.searchKey)}>
            <div className="screen-title">
                <p>{props.catData.imgTag} </p>
            </div>
            <img src={props.catData.imgUrl} alt="" />
        </div>
    )
} 