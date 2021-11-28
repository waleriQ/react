
import React from 'react';
import rb from './Rightbar.module.css';
import {Link} from 'react-router-dom';
let Rightbar = (props) => {


  let FriendsRequest = (props) => {
return (
<>
  <div className={rb.rightbar_request}>
    <div className={rb.navblock_avatar}>
      <img src={props.img} alt="avatar" />
    </div>
    <ul className={rb.rightbar_list}>
      <li className={rb.rightbar_name}>
        <p><Link to="">{props.name}</Link></p>
      </li>
      <li className={rb.rightbar_name}>
      <span>{props.mutual}mutual friends</span>
      </li>
    </ul>
  </div>
  <form action="/" method="post" className={rb.btn}>
      <button className={rb.btn__blue}>Confirm</button>
      <button className={rb.btn__gray}>Delete</button>
    </form>
</>
)
  };

  let FriendsElements = props.stateData.FriendsRequestData.map (friendRequestMassive => {
    return (
      <FriendsRequest
       title={friendRequestMassive.title} 
      name={friendRequestMassive.name} 
      mutual={friendRequestMassive.mutual} 
      img={friendRequestMassive.img}/>
    )
  })




return (

  <aside className={rb.aside} >
    <div className={rb.sidebar__wrapper}>
    <div className={rb.navblock}>
  <div className={rb.navblock__title}>
    <p>Friends Request</p>
    <span><Link to="/friends">See all</Link></span>
  </div>
{
  FriendsElements
}
</div>
      <div className={rb.navblock}>
        <div className={rb.navblock__title}>
          <p>Confirm Request</p>
          <span><Link to="/friends">See all</Link></span>
        </div>

        <div className={`${rb.rightbar_request} ${rb.rightbar_request_confirm}`}>
        <div className={`${rb.navblock_avatar} ${rb.nablock_avatar_confirm}`}>
            <img src="https://p0.pikist.com/photos/719/257/man-model-face-adult-guy-male-person-portrait-handsome.jpg" alt="" />
          </div>
          <ul className={rb.rightbar_list}>
            <li className={rb.rightbar_name}>
              <p>Valeriy Sergeev</p>
            </li>
            <li className={rb.rightbar_name}>
            <span>12 mutual friends</span>
            </li>
          </ul>
        </div>
        <div className={`${rb.rightbar_request} ${rb.rightbar_request_confirm}`}>
        <div className={`${rb.navblock_avatar} ${rb.nablock_avatar_confirm}`}>
            <img src="https://media.krasota.ru/filer_public/fa/ae/faae81fe-0461-4af9-986a-f7249d8fca67/39_rodri_gogurio.jpg" alt="" />
          </div>
          <ul className={rb.rightbar_list}>
            <li className={rb.rightbar_name}>
              <p>Carl Vangon</p>
            </li>
            <li className={rb.rightbar_name}>
            <span>12 mutual friends</span>
            </li>
          </ul>
        </div>
        <div className={`${rb.rightbar_request} ${rb.rightbar_request_confirm}`}>
          <div className={`${rb.navblock_avatar} ${rb.nablock_avatar_confirm}`}>
            <img src="https://n1s2.hsmedia.ru/1a/51/d1/1a51d131fd1802f579a448dc2b0ebcf9/1565x2348_0xac120003_17871423461627298878.jpg" alt="" />
          </div>
          <ul className={rb.rightbar_list}>
            <li className={rb.rightbar_name}>
              <p>Stivi Jonson</p>
            </li>
            <li className={rb.rightbar_name}>
            <span>12 mutual friends</span>
            </li>
          </ul>
        </div>
        
</div>  {/* navblock confirm */}

</div>
</aside>


)
};

export default Rightbar; 
