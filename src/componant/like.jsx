import React, {Component} from 'react';

export default class Like extends Component {
    renderLikeClass = (isLiked) => {
        let theClass = "like-button fa fa-heart"
        if (isLiked)
            return theClass;
        return theClass + "-o";

    }

    render() {
        const isLiked = this.props.isLiked;
        const onLike = this.props.onLike;
        return <span
            onClick={onLike}> <li className={this.renderLikeClass(isLiked)} aria-hidden="true"/> </span>;
    }
}