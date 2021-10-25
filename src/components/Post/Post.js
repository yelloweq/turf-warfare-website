import React from 'react';
import './Post.scss';

function Post(props) {
    return (
        <article key={props.index} className="card">
            <div className="image">
                <img src={props.image} alt={props.imageAlt} />
            </div>
            <div className="info">
                <div className="category">
                    {props.category}
                </div>
                <div className="title">
                    <h2>{props.title}</h2>
                </div>
                <div className="content">
                    {props.content}
                </div>
                <div className="meta">
                    <span className="author">{props.author}</span>
                    <span className="time">{new Date(props.createdAt.seconds * 1000).toDateString()}</span>
                </div>
            </div>
        </article>
    )
}

export default Post
