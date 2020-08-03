import React from 'react';
import classnames from 'classnames';

export class Card extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        let {
            className,
            float,
            ...other
        } = this.props;
        return (
            <div
                className={
                    classnames(

                        className,
                    )}
                {...other}
            >
                {this.props.children}
            </div>
        );
    }
}

