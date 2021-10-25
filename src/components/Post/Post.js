import React from 'react';
import './Post.scss';

function Post({props}) {
    return (
        <article key={props.slug} className="card">
            <div class="image">
                <img src={props.image} alt={props.imageAlt} />
            </div>
            <div class="info">
                <div class="category">
                    {props.category}
                </div>
                <div class="title">
                    <h2>{props.title}</h2>
                </div>
                <div class="meta">
                    <span class="author">{props.author}</span>
                    <span class="time">{props.createdAt}</span>
                </div>
            </div>
        </article>
    )
}

export default Post
