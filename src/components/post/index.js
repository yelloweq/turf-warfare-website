import React, { useState, useEffect } from 'react';
import './Post.scss';
// import { Redirect } from 'react-router-dom';
import firebase from '../../config/firebase';
import moment from 'moment';
import img from '../../resources/img/announcement1.png'

function Post({ match }) {
    const [loading, setLoading] = useState(true);
    const [currentPost, setCurrentPost] = useState();

    useEffect(() => {
        firebase.firestore().collection("Posts").where("slug", "==", match.params.slug).get().then(snap => {
            setCurrentPost((snap.docs[0]));
            setLoading(false);
            
        });
    }, [match]);


    if (loading) {
        return <h1>Loading...</h1>
    }
    
    return (
        <>
        <section className="post">
        <div className="post-container">
        <img src={img} alt={currentPost.data().coverImageAlt} />
            <div className="post-wrapper">
            <h1>{currentPost.data().title}</h1>
            <p className="cat">{currentPost.data().category}</p>
            <p>{currentPost.data().content}</p>
            <p>{moment(new Date(currentPost.data().createdAt.seconds *1000), "seconds").fromNow()}</p>
        </div>
        </div>
        </section>
        
        </>
    )
}

export default Post
