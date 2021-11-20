import React from 'react';
import './Post.css';
let Post = () => {
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
      <form action="/" className="post__form" method="post">
      {/* <a href="">
          <img className='post__avatar' src="https://condenast-media.gcdn.co/tatler/54aa5f2f4f8e7a82a945424af8976fbb.jpg/685dce14/o/t3000x2024" alt="" />
        </a> */}
        <textarea className="post__textarea" placeholder='Whats on your mind...'></textarea>
      </form>
    </div>
    <div className="post__icons">
      <div className="post__information">
        <a href=""><img src="https://cdn-icons.flaticon.com/png/512/4049/premium/4049958.png?token=exp=1637434167~hmac=ff35dad659f2e614d337e691b79a21bf" alt="" /></a>
        <a href=""><p>Live Video</p></a>
      </div>
     
      <div className="post__information">
        <a href=""><img src="https://cdn-icons.flaticon.com/png/512/5204/premium/5204343.png?token=exp=1637434190~hmac=af0b5ac0e9ad469a59e2b4bb04573737" alt="" /></a>
        <a href=""><p>Photo/Video</p></a>
      </div>

      <div className="post__information">
        <a href=""><img src="https://cdn-icons-png.flaticon.com/512/2455/2455125.png" alt="" /></a>
        <a  href=""><p>Feeling/Activity</p></a>
      </div>

   

      </div>
    </div>
   


    
 

)
};
export default Post;

