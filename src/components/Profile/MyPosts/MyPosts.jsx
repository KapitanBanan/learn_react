import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const MyPosts = (props) => {

    let PostElement = props.posts.map( p => <Post massage={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            New post
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div>
                My posts
            </div>
            <div>
                {PostElement}
            </div>
        </div>
    )
}

export default MyPosts;