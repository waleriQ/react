import React from 'react';
import './Dialogs.css';
import {Link} from 'react-router-dom';
import {updateNewMessageBodyCreater} from '../redux/state'
import {sendMessageCreater} from '../redux/state'


const MessageLeft = (props) =>{
return (
<div className="message__left">
<div className="dialogs__wrapper">
  <img className="dialogs__avatar" src={props.img} alt="" />
  <ul className="dialogs__item">
    <li className="dialogs__name">{props.name} </li>
    <time className="dialogs__time" datatime={props.time}>{props.time}</time>
  </ul>
</div>
<div className="message">
  <p>{props.message}</p>
</div>  {/* POSITION LEFT */}
</div>
)
};

const MessageRight = (props) =>{
  return (
  <div className="message__left">
  <div className="dialogs__wrapper dialogs__wrapper_right">
    <img className="dialogs__avatar" src={props.img} alt="" />
    <ul className="dialogs__item">
      <li className="dialogs__name">{props.name} </li>
      <time className="dialogs__time" datatime={props.time}>{props.time}</time>
    </ul>
  </div>
  <div className="message message_right">
    <p>{props.message}</p>
  </div> {/* POSITION RIGHT */}
  </div>
  )
  };

let Dialogs = (props) => {
let userMessageLeft = props.userData.map (userMesaageMassiveLeft =>
  <>
  <MessageLeft id={userMesaageMassiveLeft.id}
    name={userMesaageMassiveLeft.name}
    img={userMesaageMassiveLeft.img}
    time={userMesaageMassiveLeft.time}
    message={userMesaageMassiveLeft.message} />
      
      </>
  )

let NewMessageBody=props.state.NewMessageBody;
let onSendMessageClick = () => {
  props.store.dispatch(sendMessageCreater());
}
let onNewMessageChange = (event) => {
let body = event.target.value;
props.store.dispatch(updateNewMessageBodyCreater(text))
}
return (
<div className="dialogs">
{userMessageLeft}
<div className="dialogs_container">
  <div className="post">
        <form action="/" className="post__form" method="post" >
        <button onlick={onSendMessageClick} onChange={onNewMessageChange} className='btn__blue'>Confirm</button>
          <textarea value="NewMessageBody" className="post__textarea" placeholder='Whats on your mind...'>
          </textarea>
          
        </form>
      </div>
</div>

</div>

)
};
export default Dialogs;

