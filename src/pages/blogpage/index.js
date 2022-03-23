import React, {useState, useEffect} from 'react';
import firebase from '../../config/firebase';
import './Blog.scss';
import Title from '../../components/title'
import moment from 'moment';
import { Link } from 'react-router-dom';
import img from '../../resources/img/announcement1.png'
function Blog() {

    const [loading, setLoading] = useState(true);
    const [blogposts, setBlogposts] = useState([]);

    useEffect(() => {
        firebase.firestore().collection("Blog").orderBy("createdAt").get().then(snap => {
            let posts = [];
            snap.docs.forEach(doc => {
                posts.push({ ...doc.data(), id: doc.id })
            })
            setBlogposts(posts.reverse());
            setLoading(false);
        });
    }, []);
    
    if (loading) {
        return <h1>You need to be signed in to view this content.</h1>
    }

    return (
        <>
            <Title>Blog Posts</Title>
            <section>
            <div className="container">
                <div className="wrapper">
                    <ol className="grid">
                        {blogposts ? (
                            blogposts.map((blogpost) => {
                                return (
                                    <li className="item" key={blogpost}>
                                        <article className="post-container">
                                            <Link to={`/blog/${blogpost.slug}`}>
                                                <div className="image">
                                                    {/* <img src={blogpost.coverImage} alt={blogpost.coverImageAl} /> */}
                                                    <img src={img} alt={blogpost.coverImageAl} />
                                                </div>
                                                <div className="info">
                                                    <div className='d-flex justify-content-between'>
                                                    <div className="category">
                                                        {blogpost.category}
                                                    </div>
                                                    <div className="time category">{moment(new Date(blogpost.createdAt.seconds *1000), "seconds").fromNow()}</div>
                                                    </div>
                                                   
                                                    <div className="title text-white">
                                                        <h2 className='blog-title'>{blogpost.title}</h2>
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

export default Blog
