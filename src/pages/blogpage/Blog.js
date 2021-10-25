import React, {useState} from 'react';
import firebase from '../../config/firebase';


function Blog() {

    const [loading, setLoading] = useState(true);
    const [blogposts, setBlogposts] = useState([]);

    if (loading && !blogposts.length) {
        firebase.database().ref("Posts/").orderByChild("CreatedAt").once("value").then(snapshot => {
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

            {/* {blogposts.map(blogpost => (
                //post component with mapped props
            ))} */}
        </>
    )
}

export default Blog
