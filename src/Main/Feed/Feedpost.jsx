import React from 'react';
import './Feedpost.css';
import {Link} from 'react-router-dom';


  
let Feedpost = (props) => {
return (
  <>
  <div className="Feedpost">
<div className="Feedpost_wrapper">
  <div className="Feedpost__avatar">
    <Link to=""><img src="https://klike.net/uploads/posts/2019-10/1570368924_222.jpg" alt="" /></Link>
  </div>
  <ul className="Feedpost__list">
    <li className="Feedpost__name">
    <Link to="">Surfiya Zakir</Link>
    </li>
    <li className="Feedpost__datatime">
      22 min ago
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
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis eum et laudantium voluptatem! Molestiae repudiandae
   aliquam ut alias quis vel, saepe, ea architecto necessitatibus earum et delectus. Eum quibusdam cumque nostrum, assumenda eius, nulla saepe voluptas iusto sunt suscipit voluptates.
</p>
<div className="Feedpost__image">
  <img src="http://sociala.uitheme.net/assets/images/t-10.jpg" alt="" />
</div>

  </div>
  <div className="Feedpost__icons">
    <ul className="Feedpost__likecomments">
      <li className="Feedpost__like">
        <a href=""><img src="/images/heart.svg" alt="" /></a>
       <a href="">Like 2.8k</a>
      </li>
   
      
      <li className="Feedpost__comments">
        <a href=""><img src="/images/message.svg" alt="" /></a>
        <Link to="/"> 22 Comments</Link>
      </li>
    </ul>
    <div className="Feedpost__share">
 <a href=""><img src="/images/direction.svg" alt="" /></a>
    </div>
  </div>
  

  
    </div>
    <div className="Feedpost">
<div className="Feedpost_wrapper">
  <div className="Feedpost__avatar">
    <Link to=""><img src="https://klike.net/uploads/posts/2019-10/1570368924_222.jpg" alt="" /></Link>
  </div>
  <ul className="Feedpost__list">
    <li className="Feedpost__name">
    <Link to="">Surfiya Zakir</Link>
    </li>
    <li className="Feedpost__datatime">
      22 min ago
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
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis eum et laudantium voluptatem! Molestiae repudiandae
   aliquam ut alias quis vel, saepe, ea architecto necessitatibus earum et delectus. Eum quibusdam cumque nostrum, assumenda eius, nulla saepe voluptas iusto sunt suscipit voluptates.
</p>
<div className="Feedpost__image">
  <img src="http://sociala.uitheme.net/assets/images/t-10.jpg" alt="" />
</div>

  </div>
  <div className="Feedpost__icons">
    <ul className="Feedpost__likecomments">
      <li className="Feedpost__like">
        <a href=""><img src="/images/heart.svg" alt="" /></a>
       <a href="">Like 2.8k</a>
      </li>
   
      
      <li className="Feedpost__comments">
        <a href=""><img src="/images/message.svg" alt="" /></a>
        <Link to="/"> 22 Comments</Link>
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
export default Feedpost;

