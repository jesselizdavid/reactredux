import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {

    const newDate = { date: new Date().toString() };
    const avatar = faker.image.avatar()

    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{newDate.date}</span>
                </div>
                <div className="text">{props.message}</div>
            </div>              
        </div>
    );
}

export default CommentDetail;