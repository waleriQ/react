import React from 'react';
import sm from './SideBar.module.css';
import {Link} from 'react-router-dom';
let SideBar = () => {
return (
  
<aside className={sm.aside} >
<div className={sm.sidebar__wrapper}>
  <div className={sm.navblock}> 
  <div className={sm.navblock__title}>
    <p>New Feeds</p>
  </div>
  <ul className={sm.navblock__list}>
    <li className={sm.navblock__item}>
      <img className={sm.navblock__img} src="/images/monitor.svg" alt="feeds" />
      <Link className={sm.navblock__link} to="/feeds">Newsfeed</Link>
    </li>
    <li className={sm.navblock__item}>
      <img className={sm.navblock__img} src="/images/jewel.svg" alt="bagges" />
      <a className={sm.navblock__link} href="">Badges</a>
    </li>
    <li className={sm.navblock__item}>
      <img className={sm.navblock__img} src="/images/web.svg" alt="stories" />
      <a className={sm.navblock__link} href="">Explore Stories</a>
    </li>
    <li className={sm.navblock__item}>
      <img className={sm.navblock__img} src="/images/rocket.svg" alt="groups" />
      <a className={sm.navblock__link} href="">Popular Group</a>
    </li>
    <li className={sm.navblock__item}>
      <img className={sm.navblock__img} src="/images/user.svg" alt="profile" />
      <Link className={sm.navblock__link} to="/profile">Author Profile</Link>
    </li>
  </ul>
  </div>
  <div className={sm.navblock}> 
  <div className={sm.navblock__title}>
    <p>More Pages</p>
  </div>
  <ul className={sm.navblock__list}>
    <li className={sm.navblock__item}>
      <img className={sm.navblock__img} src="/images/inbox.svg" alt="" />
      <a className={sm.navblock__link} href="">Email Box</a>
    </li>
    <li className={sm.navblock__item}>
      <img className={sm.navblock__img} src="/images/store.svg" alt="" />
      <a className={sm.navblock__link} href="">Near Hotel</a>
    </li>
    <li className={sm.navblock__item}>
      <img className={sm.navblock__img} src="/images/location.svg" alt="" />
      <a className={sm.navblock__link} href="">Latest Event</a>
    </li>
    <li className={sm.navblock__item}>
      <img className={sm.navblock__img} src="/images/feed.svg" alt="" />
      <a className={sm.navblock__link} href="">Live Stream</a>
    </li>
  </ul>
  </div>
  <div className={sm.navblock}> 
  <div className={sm.navblock__title}>
    <p>Account</p>
  </div>
  <ul className={sm.navblock__list}>
    <li className={sm.navblock__item}>
      <img className={sm.navblock__img} src="/images/gear.svg" alt="" />
      <a className={sm.navblock__link} href="">Settings</a>
    </li>
    <li className={sm.navblock__item}>
      <img className={sm.navblock__img} src="/images/graph-bar.svg" alt="" />
      <a className={sm.navblock__link} href="">Analytics</a>
    </li>
    <li className={sm.navblock__item}>
      <img className={sm.navblock__img} src="/images/message.svg" alt="" />
      <a className={sm.navblock__link} href="">Chat</a>
    </li>
  </ul>
  </div>
  

</div>
</aside>


)
};

export default SideBar; 
