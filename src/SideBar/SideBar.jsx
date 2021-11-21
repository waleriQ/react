import React from 'react';
import sm from './SideBar.module.css';
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
      <img className={sm.navblock__img} src="https://cdn-icons-png.flaticon.com/512/237/237014.png" alt="" />
      <a className={sm.navblock__link} href="/feeds">Newsfeed</a>
    </li>
    <li className={sm.navblock__item}>
      <img className={sm.navblock__img} src="https://cdn-icons-png.flaticon.com/512/1378/1378577.png" alt="" />
      <a className={sm.navblock__link} href="">Badges</a>
    </li>
    <li className={sm.navblock__item}>
      <img className={sm.navblock__img} src="https://cdn-icons.flaticon.com/png/512/303/premium/303615.png?token=exp=1637265358~hmac=5d2d901b7a12b74113fb20c4a1cd5654" alt="" />
      <a className={sm.navblock__link} href="">Explore Stories</a>
    </li>
    <li className={sm.navblock__item}>
      <img className={sm.navblock__img} src="https://cdn-icons-png.flaticon.com/512/1256/1256650.png" alt="" />
      <a className={sm.navblock__link} href="">Popular Group</a>
    </li>
    <li className={sm.navblock__item}>
      <img className={sm.navblock__img} src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1637265457~hmac=3ec427ba3060610cace77bf34a226144" alt="" />
      <a className={sm.navblock__link} href="/profile">Author Profile</a>
    </li>
  </ul>
  </div>
  <div className={sm.navblock}> 
  <div className={sm.navblock__title}>
    <p>More Pages</p>
  </div>
  <ul className={sm.navblock__list}>
    <li className={sm.navblock__item}>
      <img className={sm.navblock__img} src="https://cdn-icons-png.flaticon.com/512/6011/6011130.png" alt="" />
      <a className={sm.navblock__link} href="">Email Box</a>
    </li>
    <li className={sm.navblock__item}>
      <img className={sm.navblock__img} src="https://cdn-icons.flaticon.com/png/512/1621/premium/1621088.png?token=exp=1637266535~hmac=a3550a1b3505bfcf6e70793788cf72dd" alt="" />
      <a className={sm.navblock__link} href="">Near Hotel</a>
    </li>
    <li className={sm.navblock__item}>
      <img className={sm.navblock__img} src="https://cdn-icons.flaticon.com/png/512/4725/premium/4725482.png?token=exp=1637266572~hmac=56219fe1a256be1084c5e45a50514545" alt="" />
      <a className={sm.navblock__link} href="">Latest Event</a>
    </li>
    <li className={sm.navblock__item}>
      <img className={sm.navblock__img} src="https://cdn-icons-png.flaticon.com/512/3781/3781721.png" alt="" />
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
      <img className={sm.navblock__img} src="https://cdn-icons.flaticon.com/png/512/5561/premium/5561749.png?token=exp=1637343016~hmac=63dad4ee78c8c3ec7e9b465716386f83" alt="" />
      <a className={sm.navblock__link} href="">Settings</a>
    </li>
    <li className={sm.navblock__item}>
      <img className={sm.navblock__img} src="https://cdn-icons-png.flaticon.com/512/3314/3314553.png" alt="" />
      <a className={sm.navblock__link} href="">Analytics</a>
    </li>
    <li className={sm.navblock__item}>
      <img className={sm.navblock__img} src="https://cdn-icons.flaticon.com/png/512/5356/premium/5356263.png?token=exp=1637343109~hmac=4377e40d89e99630b7dcdd641059b5a8" alt="" />
      <a className={sm.navblock__link} href="">Chat</a>
    </li>
  </ul>
  </div>
  

</div>
</aside>


)
};

export default SideBar; 
