import React from 'react';
import './Story.css';
let Story = () => {
return (
<div className="stories_wrapper">
  <div className="stories">
  <div className="stories__item">
    <a href=""><img src="https://new-magazine.ru/wp-content/uploads/2020/06/image-08-06-20-01-35-3.jpeg" alt="" className="stories__pic" /></a>
    <div className="stories__avatar">
      <a href="">
        <img src="https://www.spletnik.ru/img/2019/08/nadja/20190806-samp-post2.jpg" alt="" />
      </a>
    </div>
    <div className="stories__author"><p>Add story</p></div>
  </div>
  <div className="stories__item">
    <a href=""><img src="https://vokrug.tv/pic/news/8/a/3/6/8a36d69bdb48be971321361eee019e55.jpg" alt="" className="stories__pic" /></a>
    <div className="stories__avatar">
      <a href="">
        <img src="https://avatars.mds.yandex.net/get-kinopoisk-post-img/1362954/e716c3d293a3611681b5c0d435100a5d/960x540" alt="" />
      </a>
    </div>
    <div className="stories__author">Johnny Dap</div>
  </div>
  <div className="stories__item">
    <a href=""><img src="https://n1s1.starhit.ru/b3/ca/97/b3ca976710f6004f2665dbef7f6dfb89/460x459_0_a06cb39777d549ceb47eb1ce4045992b@489x488_0x0a330c9a_7876398331538906287.jpeg" alt="" className="stories__pic" /></a>
    <div className="stories__avatar">
      <a href=""><img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/ecf368fe-ccab-466e-ab24-b3411ed387c1/360" alt="" />
      </a>
    </div>
    <div className="stories__author">Keira Knightley</div>
  </div>
  <div className="stories__item">
    <a href=""><img src="https://st.kp.yandex.net/images/kadr/sm_3053486.jpg" alt="" className="stories__pic" /></a>
    <div className="stories__avatar">
      <a href="">
        <img src="https://crosti.ru/patterns/00/06/2a/a050fa1f3f/picture.jpg" alt="" />
      </a>
    </div>
    <div className="stories__author">Jensons Ackles</div>
  </div>
  <div className="stories__item">
    <a href="">
    <img src="https://wikicomics.ru/uploads/posts/2020-08/1598387524_rayan-reynolds.jpg" alt="" className="stories__pic" />
    </a>
    <div className="stories__avatar">
      <a href="">
        <img src="https://vokrug.tv/pic/news/c/c/1/9/cc193e3be5232fdd43a0ed1f5f6a717f.jpg" alt="" />
      </a>
    </div>
    <div className="stories__author">Deadpool</div>
  </div>
  
  </div>
</div>
)
};
export default Story;