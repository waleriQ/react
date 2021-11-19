import React from 'react';

let SideBar = () => {
return (
  
<aside>
<div className="sidebar__wrapper">
  <div className="feeds"> 
  <div className="feeds__title">
    <p>New Feeds</p>
  </div>
  <ul className="feeds__list">
    <li className="feeds__item">
      <img src="https://cdn-icons-png.flaticon.com/512/237/237014.png" alt="" />
      <a className="feeds__link" href="">Newsfeed</a>
    </li>
    <li className="feeds__item">
      <img src="https://cdn-icons-png.flaticon.com/512/1378/1378577.png" alt="" />
      <a className="feeds__link" href="">Badges</a>
    </li>
    <li className="feeds__item">
      <img src="https://cdn-icons.flaticon.com/png/512/303/premium/303615.png?token=exp=1637265358~hmac=5d2d901b7a12b74113fb20c4a1cd5654" alt="" />
      <a className="feeds__link" href="">Explore Stories</a>
    </li>
    <li className="feeds__item">
      <img src="https://cdn-icons-png.flaticon.com/512/1256/1256650.png" alt="" />
      <a className="feeds__link" href="">Popular Group</a>
    </li>
    <li className="feeds__item">
      <img src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1637265457~hmac=3ec427ba3060610cace77bf34a226144" alt="" />
      <a className="feeds__link" href="">Author Profile</a>
    </li>
  </ul>
  </div>
  <div className="morepages"> 
  <div className="morepages__title">
    <p>More Pages</p>
  </div>
  <ul className="morepages__list">
    <li className="morepages__item">
      <img src="https://cdn-icons-png.flaticon.com/512/6011/6011130.png" alt="" />
      <a className="morepages__link" href="">Email Box</a>
    </li>
    <li className="morepages__item">
      <img src="https://cdn-icons.flaticon.com/png/512/1621/premium/1621088.png?token=exp=1637266535~hmac=a3550a1b3505bfcf6e70793788cf72dd" alt="" />
      <a className="morepages__link" href="">Near Hotel</a>
    </li>
    <li className="morepages__item">
      <img src="https://cdn-icons.flaticon.com/png/512/4725/premium/4725482.png?token=exp=1637266572~hmac=56219fe1a256be1084c5e45a50514545" alt="" />
      <a className="morepages__link" href="">Latest Event</a>
    </li>
    <li className="morepages__item">
      <img src="https://cdn-icons-png.flaticon.com/512/3781/3781721.png" alt="" />
      <a className="morepages__link" href="">Live Stream</a>
    </li>
  </ul>
  </div>
  

</div>
</aside>


)
};

export default SideBar; 
