import React from 'react';
import './Dialogs.css';
import {Link} from 'react-router-dom';

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
return (
<div className="dialogs">

<MessageLeft name="Byrom Guittet" img="/images/man.jpeg" time="02:35 PM" message="I'am fine how are you?" />
<MessageRight name="Olivia Williams" img="/images/woman.jpeg" time="02:38 PM" message="Oscar Wilde’s plays are famous for their witty dialogue." />
<MessageLeft name="Byrom Guittet" img="/images/man.jpeg" time="02:35 PM" message="We have held a number of meetings, and the dialogue is ongoing." />
<MessageRight name="Olivia Williams" img="/images/woman.jpeg" time="02:38 PM" message="Oscar Wilde’s plays are famous for their witty dialogue." />
<MessageLeft name="Byrom Guittet" img="/images/man.jpeg" time="02:35 PM" message="Information dialogues as communicative action in relation to partner modelling and information processing." />
<MessageLeft name="Byrom Guittet" img="/images/man.jpeg" time="02:35 PM" message="Issues relating to authenticity of dialogues are complex and have been hotly debated." />
<MessageLeft name="Byrom Guittet" img="/images/man.jpeg" time="02:35 PM" message="Ill-structured problems tend to produce ' dialogues of the deaf' that can defy resolution for long periods." />
<MessageRight name="Olivia Williams" img="/images/woman.jpeg" time="02:38 PM" message="In such contexts, dialogues on appropriation, inequalities of power, the user and ^ the used are irrelevant.." />
</div>
)
};
export default Dialogs;

