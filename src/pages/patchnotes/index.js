import React, {useState, useEffect} from 'react';
import firebase from '../../config/firebase';
import Title from '../../components/title'
import moment from 'moment';
import { Link } from 'react-router-dom';
import img from '../../resources/img/announcement1.png'
function PatchNotes() {

    const [loading, setLoading] = useState(true);
    const [patchNotes, setPatchNotes] = useState([]);

    useEffect(() => {
        firebase.firestore().collection("Patches").orderBy("createdAt").get().then(snap => {
            let patches = [];
            snap.docs.forEach(doc => {
                patches.push({ ...doc.data(), id: doc.id })
            })
            setPatchNotes(patches.reverse());
            setLoading(false);
        });
    }, []);
    
    if (loading) {
        return <h1>You need to be signed in to view this content.</h1>
    }

    return (
        <>
            <Title>Patch Notes</Title>
            <section>
            <div className="container">
                <div className="wrapper">
                    <ol className="grid">
                        {patchNotes ? (
                            patchNotes.map((patch) => {
                                return (
                                    <li className="item" key={patch}>
                                        <article className="post-container">
                                            <Link to={`/patch-notes/${patch.slug}`}>
                                                <div className="image">
                                                    {/* <img src={blogpost.coverImage} alt={blogpost.coverImageAl} /> */}
                                                    <img src={img} alt={patch.coverImageAlt} />
                                                </div>
                                                <div className="info">
                                                    <div className='d-flex justify-content-between'>
                                                    <div className="category">
                                                        {patch.category}
                                                    </div>
                                                    <div className="time category">{moment(new Date(patch.createdAt.seconds *1000), "seconds").fromNow()}</div>
                                                    </div>
                                                   
                                                    <div className="title text-white">
                                                        <h2 className='blog-title'>{patch.title}</h2>
                                                    </div>
                                                </div>
                                            </Link>
                                        </article> 
                                    </li>
                                )
                            })) : null}
                    </ol>
                </div>
                </div>
            </section>
        </>
    )
}

export default PatchNotes