import React, {useState, useEffect} from 'react';
import firebase from '../../config/firebase';
import './Blog.scss';
import Title from '../../components/title/Title'
import moment from 'moment';
import { Link } from 'react-router-dom';

function Blog() {

    const [loading, setLoading] = useState(true);
    const [blogposts, setBlogposts] = useState([]);

    useEffect(() => {
        firebase.firestore().collection("Posts").orderBy("createdAt").get().then(snap => {
            let posts = [];
            snap.docs.forEach(doc => {
                posts.push({ ...doc.data(), id: doc.id })
            })
            setBlogposts(posts.reverse());
            setLoading(false);
        });
    }, []);
    
    if (loading) {
        return <h1> Loading...</h1>
    }

    return (
        <>
            <Title>Blog Posts</Title>
            <div className="blog-container">
                <div className="wrapper">
                    <ol className="grid">
                        {blogposts ? (
                            blogposts.map((blogpost) => {
                                return (
                                    <li className="item">
                                        <article key={blogpost.id} className="post-container">
                                            <Link to={`/blog/${blogpost.slug}`}>
                                                <div className="image">
                                                    <img src={blogpost.coverImage} alt={blogpost.coverImageAl} />
                                                </div>
                                                <div className="info">
                                                    <div className="category">
                                                        {blogpost.category}
                                                    </div>
                                                    <div className="title">
                                                        <h2>{blogpost.title}</h2>
                                                    </div>
                                                    <div className="meta">
                                                        <span className="post author">admin</span>
                                                        <span className="post time">{moment(new Date(blogpost.createdAt.seconds *1000), "seconds").fromNow()}</span>
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
        </>
    )
}

export default Blog
