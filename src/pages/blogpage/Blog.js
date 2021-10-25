import React, {useState, useEffect} from 'react';
import firebase from '../../config/firebase';
import Post from '../../components/Post/Post';
import './Blog.scss';

function Blog() {

    const [loading, setLoading] = useState(true);
    const [blogposts, setBlogposts] = useState([]);

    useEffect(() => {
        firebase.firestore().collection("Posts").orderBy("createdAt").get().then(snap => {
            let posts = [];
            snap.docs.forEach(doc => {
                posts.push({ ...doc.data(), id: doc.id })
            })
            setBlogposts(posts);
            setLoading(false);
        });
    }, []);
    
    if (loading) {
        return <h1> Loading...</h1>
    }

    return (
        <>
            <h1>blog posts</h1>
            <div className="container">
                <div className="wrapper">
                    <ol className="gird">
                        {blogposts ? (
                            blogposts.map((blogpost) => {
                                //need to fix key console error
                            return (
                                <Post
                                    index={blogpost.id}
                                    title={blogpost.title}
                                    image={blogpost.coverImage}
                                    imageAlt={blogpost.coverImageAlt}
                                    category={blogpost.category}
                                    createdAt={blogpost.createdAt}
                                    content={blogpost.content}
                                    author="admin"
                                />     
                            )})) : null}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Blog
