import React, {useState} from 'react';
import firebase from '../../config/firebase';
import Post from '../../components/Post/Post'


function Blog() {

    const [loading, setLoading] = useState(true);
    const [blogposts, setBlogposts] = useState([]);

    if (loading && !blogposts.length) {
        firebase.firestore().collection("Posts").orderByChild("CreatedAt").once("value").then(snapshot => {
            let posts = [];
            const snapshotValue = snapshot.val();
            for (let slug in snapshotValue) {
                posts.push(snapshotValue[slug])
            }

            const newestFirst = posts.reverse();
            setBlogposts(newestFirst);
            setLoading(false);
        });
    }

    if (loading) {
        return <h1> Loading ...</h1>
    }

    return (
        <>
            <h1>blog posts</h1>
            <div class="container">
                <div class="wrapper">
                    <div class="grid">
                        {blogposts.map(blogpost => (
                            <Post
                                title={blogpost.title}
                                image={blogpost.coverImage}
                                imageAlt={blogpost.coverImageAlt}
                                category={blogpost.category}
                                author="admin"
                                time={blogpost.createdAt}
                            />
            ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
