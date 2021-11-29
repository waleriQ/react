import React from 'react';
import './Post.css';
import {Link} from 'react-router-dom';

const Postitem = (props) => {
  return (
    <div className="post__information">
    <a href=""><img src={props.img} alt="" /></a>
    <Link to="/livevideo/"><p>{props.name}</p></Link>
  </div>
  )
  };

  
let Post = (props) => {
return (
  <div className="post_wrapper">
  <div className="create__post">
    <div className="create__pic">
      <a href="">
        <img src="https://cdn-icons-png.flaticon.com/512/73/73584.png" alt="" />
      </a>
    </div>
  <div className="create__title"><p>Create Post</p></div>
  </div>
  <div className="post">
      <form action="/" className="post__form" method="post" >
 <textarea className="post__textarea" placeholder='Whats on your mind...'>

 </textarea>
      </form>
    </div>
    <div className="post__icons">
    <Postitem name="Live Video" img="/images/stream.png"/>
    <Postitem name="Photo/Video" img="/images/photograph.png"/>
    <Postitem name="Feeling/Activity" img="/images/happy.png"/>
      </div>
  
    </div>
   


    
 

)
};
export default Post;

