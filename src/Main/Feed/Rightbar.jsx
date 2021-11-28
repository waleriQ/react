
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

  let FriendsElements = props.FriendsRequestData.map (friendRequestMassive => {
    return (
      <FriendsRequest
       title={friendRequestMassive.title} 
      name={friendRequestMassive.name} 
      mutual={friendRequestMassive.mutual} 
      img={friendRequestMassive.img}/>
    )
  });


  let ConfirmRequest = (props) => {
    return (
      <div className={`${rb.rightbar_request} ${rb.rightbar_request_confirm}`}>
      <div className={`${rb.navblock_avatar} ${rb.nablock_avatar_confirm}`}>
          <img src={props.img} alt="" />
        </div>
        <ul className={rb.rightbar_list}>
          <li className={rb.rightbar_name}>
            <p>{props.name}</p>
          </li>
          <li className={rb.rightbar_name}>
          <span>{props.mutual} mutual friends</span>
          </li>
        </ul>
      </div>
    )
      };

let ConfirmRequestElements = props.ConfirmRequestData.map (ConfirmRequestMassive => {
return (
  <ConfirmRequest 
  name={ConfirmRequestMassive.name}
  mutual={ConfirmRequestMassive.mutual}
  img={ConfirmRequestMassive.img} />
)

});


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

  {
  ConfirmRequestElements
  }
  
</div>  {/* navblock confirm */}
</div>
</aside>


)
};

export default Rightbar; 
