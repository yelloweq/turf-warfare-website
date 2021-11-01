import React from 'react';
import './Post.scss';
import moment from 'moment';

function Post({index, image, imageAlt, category, title, content, author, createdAt}) {
    return (
        <article key={index} className="post-container">
            <div className="image">
                <img src={image} alt={imageAlt} />
            </div>
            <div className="info">
                <div className="category">
                    {category}
                </div>
                <div className="title">
                    <h2>{title}</h2>
                </div>
                <div className="content">
                    {content}
                </div>
                <div className="meta">
                    <span className="post author">{author}</span>
                    <span className="post time">{moment(new Date(createdAt.seconds *1000), "seconds").fromNow()}</span>
                </div>
            </div>
        </article>
    )
}

export default Post
