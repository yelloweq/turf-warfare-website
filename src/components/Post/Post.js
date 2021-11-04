import React, { useState, useEffect } from 'react';
import './Post.scss';
// import { Redirect } from 'react-router-dom';
import firebase from '../../config/firebase';
import moment from 'moment';


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
            <img src={currentPost.data().coverImage} alt={currentPost.data().coverImageAlt} />
            <h1>{currentPost.data().title}</h1>
            <p>{currentPost.data().category}</p>
            <p>{currentPost.data().content}</p>
            <p>{moment(new Date(currentPost.data().createdAt.seconds *1000), "seconds").fromNow()}</p>
            
        </>
    )
}

export default Post
