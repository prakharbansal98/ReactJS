import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import NewPost from "./NewPost";
import { useState } from "react";

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  const addPostHandler = (postData) => {
    setPosts((existingPost) => [postData, ...existingPost]);
  };

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No post available yet.</h2>
          <p>Start adding some.</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
