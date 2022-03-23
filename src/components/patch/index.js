import React, { useState, useEffect } from 'react';
import firebase from '../../config/firebase';
import moment from 'moment';
import img from '../../resources/img/announcement1.png'

function Patch({ match }) {
    const [loading, setLoading] = useState(true);
    const [currentPatch, setCurrentPatch] = useState();

    useEffect(() => {
        firebase.firestore().collection("Patches").where("slug", "==", match.params.slug).get().then(snap => {
            setCurrentPatch((snap.docs[0]));
            setLoading(false);
            
        });
    }, [match]);


    if (loading) {
        return <h1>Loading...</h1>
    }
    
    return (
        <>
        <section className="post text-white">
        <div className="container d-flex flex-column items-align-center justify-content-center">
        <img src={img} alt={currentPatch.data().coverImageAlt} />
            <div className="d-flex flex-column">
            <h1 className='post-title'>{currentPatch.data().title}</h1>
            <p className="cat">{currentPatch.data().category}</p>
            <p>{currentPatch.data().content}</p>
            <p className='text-end'>{moment(new Date(currentPatch.data().createdAt.seconds *1000), "seconds").fromNow()}</p>
        </div>
        </div>
        </section>
        
        </>
    )
}

export default Patch
