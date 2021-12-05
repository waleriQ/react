import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';
import addPostActionCreater from '../../redux/state';


const Postitem = (props) => {
  return (
    <div className="post__information">
      <a href=""><img src={props.img} alt="" /></a>
      <Link to="/livevideo/"><p>{props.name}</p></Link>
    </div>
  )
};



let Post = (props) => {
  let newPostElement = React.createRef();
  
  let addPost = () => {
    let text = newPostElement.current.value;
    props.dispatch(addPostActionCreater(text));
  newPostElement.current.value = '';
  }


  return (
    <div className="post_wrapper">
      <div className="create__post">
        <div className="create__pic">
          <a href="">
            <img src="./images/document-edit.svg" alt="" />
          </a>
        </div>
        <div className="create__title">
          <button onClick={addPost} >Create Post</button>
        </div>
      </div>
      <div className="post">
        <form action="/" className="post__form" method="post" >
          <textarea ref={newPostElement} className="post__textarea" placeholder='Whats on your mind...'>

          </textarea>
        </form>
      </div>
      <div className="post__icons">
        <Postitem name="Live Video" img="/images/stream.png" />
        <Postitem name="Photo/Video" img="/images/photograph.png" />
        <Postitem name="Feeling/Activity" img="/images/happy.png" />
      </div>

    </div>
  )
};
export default Post;

