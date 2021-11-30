import React from 'react';
import './Feedpost.css';
import {Link} from 'react-router-dom';

let FeedPosts = (props) => {
  return (
    <>
    <div className="Feedpost">
<div className="Feedpost_wrapper">
<div className="Feedpost__avatar">
  <Link to=""><img src={props.img} alt="" /></Link>
</div>
<ul className="Feedpost__list">
  <li className="Feedpost__name">
  <Link to="">{props.user}</Link>
  </li>
  <li className="Feedpost__datatime">
    {props.time} 
  </li>
</ul>
</div>
<div className="Feedpost__menu">
  <Link to="">
  <img src="./images/dots-3.svg" alt="" />
  </Link>
</div>
<div className="Feedpost__news">
<p className='Feedpost__content'>
{props.content}
</p>
<div className="Feedpost__image">
<img src="http://sociala.uitheme.net/assets/images/t-10.jpg" alt="" />
</div>

</div>
<div className="Feedpost__icons">
  <ul className="Feedpost__likecomments">
    <li className="Feedpost__like">
      <a href=""><img src="/images/heart.svg" alt="" /></a>
     <a href="">Like {props.like}</a>
    </li>
 
    
    <li className="Feedpost__comments">
      <a href=""><img src="/images/message.svg" alt="" /></a>
      <Link to="/"> {props.comment} Comments</Link>
    </li>
  </ul>
  <div className="Feedpost__share">
<a href=""><img src="/images/direction.svg" alt="" /></a>
  </div>
</div>
</div>
    </>
  )
};

  
let Feedpost = (props) => {
  let FeedPostElements = props.FeedPostsData.map (FeedPostMassive =>
  <FeedPosts name={FeedPostMassive.id}
  img={FeedPostMassive.img}
  user={FeedPostMassive.user}
  time={FeedPostMassive.time}
  content={FeedPostMassive.content}
  like={FeedPostMassive.like}
  comments={FeedPostMassive.comments}
  />  
    )

  
return (
<>
  
  {
    FeedPostElements
  } 
</>
)
};
export default Feedpost;

